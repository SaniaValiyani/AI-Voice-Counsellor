import { Request, Response } from "express";
import { getAnalytics } from "../services/analyticsService";

export async function analyticsController(
  req: Request,
  res: Response
) {
  try {
    const email = Array.isArray(req.params.email)
      ? req.params.email[0]
      : req.params.email;

    if (!email) {
      return res.status(400).json({
        error: "Email is required",
      });
    }

    const analytics = await getAnalytics(email);

    res.json(analytics);

  } catch (err) {

    res.status(500).json({
      error: "Analytics failed",
    });

  }
}