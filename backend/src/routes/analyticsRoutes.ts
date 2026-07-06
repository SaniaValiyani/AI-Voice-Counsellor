import { Router } from "express";

import {
  analyticsController,
} from "../controllers/analyticsController";

const router = Router();

router.get(
  "/:email",
  analyticsController
);

export default router;