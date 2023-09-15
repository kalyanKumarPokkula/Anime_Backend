import Episode from "../models/animeEpisode.js";

class AnimeEpisodeRepository {
  async uploadEpisode(data) {
    try {
      let episode = await Episode.create(data);
      return episode;
    } catch (error) {
      console.log("Something went wrong inthe AnimeEpisode Repo");
      throw error;
    }
  }

  async getEpisode(animeId, episodeNumber) {
    try {
      let episode = await Episode.find({
        animeId: animeId,
        episodeNumber: episodeNumber,
      });
      return episode;
    } catch (error) {
      console.log("Something went wrong inthe AnimeEpisode Repo");
      throw error;
    }
  }
}

export default AnimeEpisodeRepository;
