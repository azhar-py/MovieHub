import express from 'express'
import { register  , login ,profile ,logout } from './controllers/authController.js';

import { trending ,   popular, search, details, addFavorite, removeFavorite, addWatchlist, removeWatchlist } from "./controllers/movieController.js"
import { addReview , getReviews, updateReview, deleteReview } from "./controllers/reviewController.js"

import { defaultRouter } from './controllers/defaultController.js';
import { auth } from "./middleware/authMiddleware.js"



const router = express.Router();

// Deault Route
router.get("/",defaultRouter)

// Auth routes
router.post("/auth/register", register);
router.post("/auth/login", login);
router.post("/auth/logout", logout);
router.get("/auth/profile", auth, profile);




router.get("/trending", trending);
router.get("/popular", popular);
router.get("/search", search);
router.get("/:id", details);

router.post("/:id/favorite", auth, addFavorite);
router.delete("/:id/favorite", auth, removeFavorite);

router.post("/:id/watchlist", auth, addWatchlist);
router.delete("/:id/watchlist", auth, removeWatchlist);




router.post("/:id/reviews", auth, addReview);
router.get("/:id/reviews", getReviews);
router.put("/reviews/:id", auth, updateReview);
router.delete("/reviews/:id", auth, deleteReview);


export default router