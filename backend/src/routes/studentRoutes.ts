import { Router }
from "express";

import {
 saveProfile,
 getProfile,
}
from "../controllers/studentController";

const router =
Router();

router.get(
  "/profile",
  getProfile
);

router.post(
 "/save",
 saveProfile
);

export default router;