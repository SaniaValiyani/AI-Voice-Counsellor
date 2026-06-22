import { Router }
from "express";

import {
  roadmapController,
}
from "../controllers/roadmapController";

const router =
  Router();

router.post(
  "/roadmap",
  roadmapController
);

export default router;