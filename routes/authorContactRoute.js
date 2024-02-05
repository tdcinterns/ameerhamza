import express from "express";
const router = express.Router();

import {createContact,getAllContact} from "../controllers/authorContactController.js";

router.post('/create',createContact);
router.get('/',getAllContact);


export default router;