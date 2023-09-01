import AnimeService from "../services/animeService.js";
import uploadFile from "../config/s3.js";
import {
  commonErrorResponseMessage,
  commonResponseMessage,
} from "../common/commonMessage.js";

const animeService = new AnimeService();

const create = async (req, res) => {
  try {
    console.log(req.file);
    // console.log(req.body);
    let result = await uploadFile(req.file);
    console.log(result);
    req.body.imageURL = result.Location;
    req.body.totalEpisodes = req.body.episodes;
    req.body.episodes = [];
    console.log(req.body);
    let response = await animeService.create(req.body);
    console.log(response);
    return res
      .status(201)
      .json(commonResponseMessage(response, "Successfully created a anime"));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(
        commonErrorResponseMessage(
          error,
          "Something went wrong not able to create a anime"
        )
      );
  }
};

const getAnime = async (req, res) => {
  try {
    let response = await animeService.getAnimeById(req.params.id);
    return res
      .status(200)
      .json(commonResponseMessage(response, "Successfully fetched a anime"));
  } catch (error) {
    return res
      .status(500)
      .json(
        commonErrorResponseMessage(
          error,
          "Something went wrong not able to get a anime"
        )
      );
  }
};

export { create, getAnime };