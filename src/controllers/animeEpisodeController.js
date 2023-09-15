import AnimeEpisodeService from "../services/animeEpisodeService.js";
import uploadFile from "../config/s3.js";
import {
  commonErrorResponseMessage,
  commonResponseMessage,
} from "../common/commonMessage.js";
const animeEpisodeService = new AnimeEpisodeService();

const uploadEpisode = async (req, res) => {
  try {
    console.log(req.file);
    let result = await uploadFile(req.file);
    console.log(result);
    req.body.episodeURL = result.Location;
    let response = await animeEpisodeService.uploadEpisode(
      req.body,
      req.params.id
    );
    return res
      .status(201)
      .json(
        commonResponseMessage(response, "Successfully upload anime episode")
      );
  } catch (error) {
    return res
      .status(500)
      .json(
        commonErrorResponseMessage(
          error,
          "Something went wrong not able to upload a anime episode"
        )
      );
  }
};

const getEpisode = async (req, res) => {
  try {
    let newBody = { id: req.params.id, episodeNumber: req.query.episodeNumber };
    let response = await animeEpisodeService.getEpisode(newBody);
    return res
      .status(201)
      .json(
        commonResponseMessage(response, "Successfully fetched anime episode")
      );
  } catch (error) {
    return res
      .status(500)
      .json(
        commonErrorResponseMessage(
          error,
          "Something went wrong not able to fetch a anime episode"
        )
      );
  }
};

export { uploadEpisode, getEpisode };
