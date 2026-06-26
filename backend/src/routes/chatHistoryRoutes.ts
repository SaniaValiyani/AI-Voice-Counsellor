import { Router }
from "express";

import {
 saveMessage,
 getMessages,
}
from "../controllers/chatHistoryController";

const router =
Router();

router.post(
 "/save",
 saveMessage
);

router.get(
 "/all",
 getMessages
);

export default router;