import { Request, Response } from "express";
import { generateGoals } from "../services/goalService";

export async function getGoals(
  req: Request,
  res: Response
) {
  try {
    const { careerGoal } =
      req.body;

    const goals =
      await generateGoals(
        careerGoal
      );

    res.json({
      goals,
    });
  } catch (error) {
    res.status(500).json({
      error:
        "Failed to generate goals",
    });
  }
}