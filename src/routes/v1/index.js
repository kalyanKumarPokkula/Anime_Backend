import express from "express";
import multer from "multer";

import {
  create,
  getAnime,
  getAnimesRandomly,
} from "../../controllers/animeController.js";
import { getAnimes } from "../../controllers/animeTypeController.js";
import {
  uploadEpisode,
  getEpisode,
} from "../../controllers/animeEpisodeController.js";

const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.post("/animes", upload.single("images"), create);
router.get("/anime/:id", getAnime);
router.get("/animes/:type", getAnimes);
router.get("/anime", getAnimesRandomly);
router.post(
  "/anime/upload_episode/:id",
  upload.single("episode"),
  uploadEpisode
);
router.get("/anime/episodes/:id", getEpisode);

export default router;
