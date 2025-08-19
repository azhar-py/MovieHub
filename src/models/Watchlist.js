import mongoose from "mongoose";

const watchlistSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  movie: { type: Number, required: true }, // TMDB movie ID
  addedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Watchlist", watchlistSchema);
