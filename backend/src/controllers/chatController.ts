import { Request, Response } from "express";

import { generateReply } from "../services/geminiService";
import { analyzeSentiment } from "../services/sentimentService";

import { 
getMemory,
addMemory, 
} 
from "../services/memoryService";

import {
extractMemory
}
from "../services/memoryExtractionService";

import { AuthRequest }
from "../middleware/authMiddleware";

import {
  saveConversation,
} from "../services/conversationService";


export async function chatController(
  req: AuthRequest,
  res: Response
) {
  try {

    const memory =
      await getMemory(req.userId!);
    
    const {
      message,
      history,
      profile,
      settings,
    } = req.body;

    const reply =
      await generateReply(
        message,
        history,
        profile,
        memory,
        settings
      );

    const extractedMemory =
      await extractMemory(message);

    if (extractedMemory.trim()) {
      await addMemory(
        profile.email,
        extractedMemory
      );
    }

    const sentiment =
      analyzeSentiment(message);

    await saveConversation(

      req.userId!,

      [
        ...history,

        {
          sender: "user",

          message,

          timestamp:
            new Date().toLocaleTimeString(),
        },

        {
          sender: "ai",

          message: reply,

          timestamp:
            new Date().toLocaleTimeString(),
        },
      ],

      profile?.preferredLanguage ||
        "English",

      sentiment
    );

    return res.json({
      reply,
      sentiment,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error:
        "Failed to generate response",
    });
  }
}