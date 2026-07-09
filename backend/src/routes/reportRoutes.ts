import { Router } from "express";
import { protect } from "../middleware/authMiddleware";

import {
  reportController,
} from "../controllers/reportController";

const router = Router();

router.get(
"/",
protect,
reportController
);

export default router;