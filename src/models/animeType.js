import mongoose from "mongoose";

const animeTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: ["Tv", "Movies"],
      required: true,
    },

    animes: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Anime",
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

const Type = mongoose.model("Type", animeTypeSchema);

export default Type;
