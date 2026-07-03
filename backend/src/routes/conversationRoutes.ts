import { Router } from "express";

import { protect } from "../middleware/authMiddleware";

import {

  getConversations,

} from "../controllers/conversationController";

const router = Router();

router.get(

  "/",

  protect,

  getConversations

);

export default router;