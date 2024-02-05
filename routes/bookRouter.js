import express from "express";
const router = express.Router();

import { createBook,deleteBook,getAllBook } from "../controllers/bookController.js";

router.post('/create',createBook);
router.get('/', getAllBook);
router.delete('/:id',deleteBook)

export default router;