import {
  commonErrorResponseMessage,
  commonResponseMessage,
} from "../common/commonMessage.js";
import AnimeTypeService from "../services/animeTypeService.js";

const animeTypeService = new AnimeTypeService();

const getAnimes = async (req, res) => {
  try {
    console.log(req.params.type);
    let response = await animeTypeService.getAnimesByType(req.params.type);
    console.log(response);
    return res
      .status(200)
      .json(commonResponseMessage(response, "Successfully fetched  a animes"));
  } catch (error) {
    return res
      .status(500)
      .json(commonErrorResponseMessage(error, "not able to fetch animes"));
  }
};

export { getAnimes };
