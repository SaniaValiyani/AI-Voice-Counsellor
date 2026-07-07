import { Router } from "express";

import {
getProfile,
updateProfile,
} from "../controllers/profileController";

import { protect } from "../middleware/authMiddleware";

const router=Router();

router.get(
"/",
protect,
getProfile
);

router.put(
"/",
protect,
updateProfile
);

export default router;