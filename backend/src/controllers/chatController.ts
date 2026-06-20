import { Request, Response } from "express";

import { generateReply }
from "../services/geminiService";

export async function chatController(
  req: Request,
  res: Response
) {
  try {
    const { message } = req.body;

    const reply =
      await generateReply(message);

    return res.json({
      reply,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error:
        "Failed to generate response",
    });
  }
}