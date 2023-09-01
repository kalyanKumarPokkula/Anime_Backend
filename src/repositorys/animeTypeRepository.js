import Type from "../models/animeType.js";

class AnimeTypeRepository {
  async create(data) {
    try {
      let response = await Type.create(data);
      return response;
    } catch (error) {
      console.log("something went wrong in the AnimeTypeRepo");
      throw error;
    }
  }

  async getAnimeByType(type) {
    try {
      let response = await Type.findOne({ name: type });
      return response;
    } catch (error) {
      console.log("something went wrong in the AnimeTypeRepo");
      throw error;
    }
  }

  async getAnimesByType(type) {
    try {
      let response = await Type.findOne({ name: type }).populate("animes");
      return response;
    } catch (error) {
      console.log("something went wrong in the AnimeTypeRepo");
      throw error;
    }
  }
}

export default AnimeTypeRepository;
