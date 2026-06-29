import { Request, Response } from "express";

import { generateReply } from "../services/geminiService";
import { analyzeSentiment } from "../services/sentimentService";
import { getMemory } from "../services/memoryService";

import {
extractMemory
}
from "../services/memoryExtractionService";


export async function chatController(
  req: Request,
  res: Response
) {
  try {

    const memory =
      await getMemory();
    
    const {
      message,
      history,
      profile,
      settings,
    } = req.body;

    await extractMemory(
    message
    );

    const reply =
      await generateReply(
        message,
        history,
        profile,
        memory,
        settings
      );

    const sentiment =
      analyzeSentiment(message);

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