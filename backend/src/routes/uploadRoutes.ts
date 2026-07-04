import { Router } from "express";

import { protect } from "../middleware/authMiddleware";

import { upload } from "../config/multer";

import {
  uploadProfileImage,
  uploadResume,
} from "../controllers/uploadController";

const router = Router();

router.post(
  "/profile-image",
  protect,
  upload.single("profileImage"),
  uploadProfileImage
);

router.post(
  "/resume",
  protect,
  upload.single("resume"),
  uploadResume
);

export default router;