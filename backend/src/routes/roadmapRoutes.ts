import { Router } from "express";

import {
  roadmapController,
} from "../controllers/roadmapController";

const router = Router();

router.get(
  "/:email",
  roadmapController
);

export default router;