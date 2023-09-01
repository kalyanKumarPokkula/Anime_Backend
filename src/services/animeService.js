import AnimeRepository from "../repositorys/animeRepository.js";
import AnimeTypeRepository from "../repositorys/animeTypeRepository.js";

class AnimeService {
  constructor() {
    this.animeRepository = new AnimeRepository();
    this.animeTypeRepository = new AnimeTypeRepository();
  }

  async create(data) {
    try {
      console.log(data);
      console.log("inside the service");
      let type = await this.animeTypeRepository.getAnimeByType(data.type);
      if (type) {
        data.type = type._id;
        let anime = await this.animeRepository.create(data);
        type.animes.push(anime);
        await type.save();
        return anime;
      } else {
        let typeBody = { name: data.type, animes: [] };
        let NewType = await this.animeTypeRepository.create(typeBody);
        data.type = NewType._id;
        let anime = await this.animeRepository.create(data);
        NewType.animes.push(anime);
        await NewType.save();
        return anime;
      }
    } catch (error) {
      console.log("something went wrong in the AnimeServ");
      throw error;
    }
  }

  async getAnimeById(id) {
    try {
      let anime = await this.animeRepository.getAnimeById(id);
      return anime;
    } catch (error) {
      console.log("something went wrong in the AnimeServ");
      throw error;
    }
  }
}

export default AnimeService;
