import { Router }
from "express";

import {
 saveProfile
}
from "../controllers/studentController";

const router =
Router();

router.post(
 "/save",
 saveProfile
);

export default router;