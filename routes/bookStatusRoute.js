import express from "express";
import addBookStatus  from "../controllers/bookStatusController.js";

const router = express.Router();

router.post('/add',addBookStatus)

export default router;
