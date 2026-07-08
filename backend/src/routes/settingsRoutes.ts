import { Router } from "express";
import {
  getSettings,
  saveSettings,
} from "../controllers/settingsController";
import { protect } from "../middleware/authMiddleware";

const router = Router();

router.get("/", protect, getSettings);

router.post("/", protect, saveSettings);

export default router;