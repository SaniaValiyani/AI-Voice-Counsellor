import { Router } from "express";

import {
  reportController,
} from "../controllers/reportController";

const router = Router();

router.get(
  "/:email",
  reportController
);

export default router;