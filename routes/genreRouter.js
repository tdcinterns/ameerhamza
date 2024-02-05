import express from "express";
import { createGenre, getAllGenre } from "../controllers/genreController.js";
const router = express.Router();

router.post('/create',createGenre);
router.get('/',getAllGenre);



export default router;