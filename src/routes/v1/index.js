import express from "express";
import multer from "multer";

import { create, getAnime } from "../../controllers/animeController.js";
import { getAnimes } from "../../controllers/animeTypeController.js";

const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.post("/animes", upload.single("image"), create);
router.get("/anime/:id", getAnime);
router.get("/animes/:type", getAnimes);

export default router;
