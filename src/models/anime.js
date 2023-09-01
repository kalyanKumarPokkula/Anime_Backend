import mongoose from "mongoose";

const animeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Type",
      required: true,
    },
    premiered: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Releasing", "Completed"],
      default: "Releasing",
    },
    duration: {
      type: String,
      required: true,
    },
    totalEpisodes: {
      type: Number,
      default: 0,
    },
    episodes: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Episode",
        },
      ],
    },
    studios: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Anime = mongoose.model("Anime", animeSchema);

export default Anime;
