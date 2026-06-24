import { Request, Response } from "express";

import { generateReply } from "../services/geminiService";
import { analyzeSentiment } from "../services/sentimentService";

export async function chatController(
  req: Request,
  res: Response
) {
  try {
    const {
      message,
      history,
      profile,
    } = req.body;

    const reply =
      await generateReply(
        message,
        history,
        profile
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