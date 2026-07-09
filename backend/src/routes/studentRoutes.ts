import { Router }
from "express";

import {
 saveProfile,
 getProfile,
}
from "../controllers/studentController";

import { protect } from "../middleware/authMiddleware";

const router =
Router();

router.post(
"/save",
protect,
saveProfile
);

router.get(
"/profile",
protect,
getProfile
);

export default router;