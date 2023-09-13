import Anime from "../models/anime.js";

class AnimeRepository {
  async create(data) {
    try {
      console.log(data, "inside repo");
      let response = await Anime.create(data);
      return response;
    } catch (error) {
      console.log("something went wrong in the AnimeRepo");
      throw error;
    }
  }

  async getAnimeById(id) {
    try {
      let anime = await Anime.findById(id).populate("type");
      return anime;
    } catch (error) {
      console.log("something went wrong in the AnimeRepo");
      throw error;
    }
  }

  async getAnimes() {
    try {
      let animes = await Anime.find({});
      return animes;
    } catch (error) {
      console.log("something went wrong in the AnimeRepo");
      throw error;
    }
  }
}

export default AnimeRepository;
