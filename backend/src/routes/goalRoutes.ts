import { Router }
from "express";

import {
  getGoals,
}
from "../controllers/goalController";

const router =
  Router();

router.post(
  "/",
  getGoals
);

export default router;