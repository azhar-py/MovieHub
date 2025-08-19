import express from 'express'
import { registerUser  , loginUser } from './controllers/authController.js';
import { defaultRouter } from './controllers/defaultController.js';

const router = express.Router();

// Deault Route
router.get("/",defaultRouter)

// Auth routes
router.post("/auth/register", registerUser);
router.post("/auth/login", loginUser);


export default router