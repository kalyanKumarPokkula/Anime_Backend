import AnimeTypeRepository from "../repositorys/animeTypeRepository.js";

class AnimeTypeService {
  constructor() {
    this.animeTypeRepository = new AnimeTypeRepository();
  }

  async getAnimesByType(typeName) {
    try {
      let animes = await this.animeTypeRepository.getAnimesByType(typeName);
      return animes.animes;
    } catch (error) {
      console.log("Something went wrong in the AnimeType Service");
      throw error;
    }
  }
}

export default AnimeTypeService;
