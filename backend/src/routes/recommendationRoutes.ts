import { Router } from "express";

import { recommendationController } from "../controllers/recommendationController";

import { protect } from "../middleware/authMiddleware";

const router=Router();

router.get(

"/",

protect,

recommendationController

);

export default router;