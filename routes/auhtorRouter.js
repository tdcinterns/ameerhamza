import express from "express";
import { authorLogin, authorLogout, authorSignup, deleteAuthor, getAllAuthor } from "../controllers/authorController.js";
import auth from '../middlewares/auth.js';

const router = express.Router();

router.post('/signup',authorSignup);
router.post('/login',authorLogin);

router.post('/logout',auth, authorLogout);
router.get('/',auth, getAllAuthor);
router.delete('/:id',deleteAuthor)

export default router;