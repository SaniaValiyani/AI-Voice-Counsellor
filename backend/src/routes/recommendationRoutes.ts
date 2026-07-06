import { Router } from "express";

import {
  recommendationController,
} from "../controllers/recommendationController";

const router = Router();

router.get(
  "/:email",
  recommendationController
);

export default router;