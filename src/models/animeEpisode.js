import mongoose from "mongoose";

const animeEpisodeSchema = new mongoose.Schema(
  {
    animeName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Anime",
      required: true,
    },
    episodeNumber: {
      type: Number,
      required: true,
    },
    episodeURL: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Episode = mongoose.model("Episode", animeEpisodeSchema);

export default Episode;
