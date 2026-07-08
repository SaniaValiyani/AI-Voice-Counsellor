import { Request, Response } from "express";
import Student from "../models/Student";
import { generateRecommendations } from "../services/recommendationService";

export async function recommendationController(
  req: Request,
  res: Response
) {
  try {
    const student =
      await Student.findOne({
        email: req.params.email,
      });

    if (!student) {
      return res.status(404).json({
        error: "Student not found",
      });
    }

    const recommendations =
      await generateRecommendations(student);

    res.json(recommendations);

  } catch {

    res.status(500).json({
      error: "Failed",
    });

  }
}