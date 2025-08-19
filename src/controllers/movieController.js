import axios from "axios";
import User from "../models/User.js";

const TMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: { api_key: process.env.TMDB_KEY }
});

// Public APIs
export const trending = async (req, res) => { 
  res.json((await TMDB.get("/trending/movie/week")).data);
}
export const popular = async (req, res) => res.json((await TMDB.get("/movie/popular")).data);
export const search = async (req, res) => res.json((await TMDB.get("/search/movie", { params: { query: req.query.q } })).data);
export const details = async (req, res) => res.json((await TMDB.get(`/movie/${req.params.id}`)).data);

// Protected actions
export const addFavorite = async (req, res) => {
  await User.findByIdAndUpdate(req.user._id, { $addToSet: { favorites: req.params.id } });
  res.json({ message: "Added to favorites" });
};
export const removeFavorite = async (req, res) => {
  await User.findByIdAndUpdate(req.user._id, { $pull: { favorites: req.params.id } });
  res.json({ message: "Removed from favorites" });
};
export const addWatchlist = async (req, res) => {
  await User.findByIdAndUpdate(req.user._id, { $addToSet: { watchlist: req.params.id } });
  res.json({ message: "Added to watchlist" });
};
export const removeWatchlist = async (req, res) => {
  await User.findByIdAndUpdate(req.user._id, { $pull: { watchlist: req.params.id } });
  res.json({ message: "Removed from watchlist" });
};
