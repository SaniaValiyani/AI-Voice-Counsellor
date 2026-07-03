import { Router } from "express";

import { chatController }
from "../controllers/chatController";
import { protect } from "../middleware/authMiddleware";

const router = Router();

router.post(
  "/",
  protect,
  chatController
);

export default router;