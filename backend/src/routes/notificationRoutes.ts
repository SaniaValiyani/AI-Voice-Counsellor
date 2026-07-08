import { Router } from "express";

import { protect } from "../middleware/authMiddleware";

import { getNotifications } from "../controllers/notificationController";

const router=Router();

router.get(

"/",

protect,

getNotifications

);

export default router;