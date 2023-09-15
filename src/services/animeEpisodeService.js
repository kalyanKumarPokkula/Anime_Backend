import AnimeRepository from "../repositorys/animeRepository.js";
import AnimeEpisodeRepository from "../repositorys/animeEpisodeRepository.js";

class AnimeEpisodeService {
  constructor() {
    this.animeRepository = new AnimeRepository();
    this.animeEpisodeRepository = new AnimeEpisodeRepository();
  }

  async uploadEpisode(data, animeId) {
    try {
      let anime = await this.animeRepository.getAnimeById(animeId);
      if (anime) {
        data.animeId = anime._id;
        let episode = await this.animeEpisodeRepository.uploadEpisode(data);
        anime.episodes.push(episode);
        await anime.save();
        return episode;
      }
    } catch (error) {
      console.log("Something went wrong inthe AnimeEpisode Service");
      throw error;
    }
  }

  async getEpisode(data) {
    try {
      let episode = await this.animeEpisodeRepository.getEpisode(
        data.id,
        data.episodeNumber
      );
      return episode;
    } catch (error) {
      console.log("Something went wrong inthe AnimeEpisode Service");
      throw error;
    }
  }
}

export default AnimeEpisodeService;
