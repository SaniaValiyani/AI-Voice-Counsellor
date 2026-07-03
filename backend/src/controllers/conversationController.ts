import { Response } from "express";

import Conversation from "../models/Conversation";

import { AuthRequest } from "../middleware/authMiddleware";

export async function getConversations(

  req: AuthRequest,

  res: Response

) {

  const conversations =
    await Conversation.find({

      student: req.userId,

    }).sort({

      createdAt: -1,

    });

  res.json(conversations);

}