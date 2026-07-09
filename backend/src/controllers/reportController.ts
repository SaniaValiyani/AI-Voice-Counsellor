import { Request, Response } from "express";

import Student from "../models/Student";
import { generateWeeklyReport } from "../services/reportService";
import { AuthRequest } from "../middleware/authMiddleware";

export async function reportController(
  req:AuthRequest,
  res: Response
) {
  try {

    const student=
    await Student.findOne({
    email:req.userEmail,
    });

    if (!student) {
      return res.status(404).json({
        error: "Student not found",
      });
    }

    const report =
      await generateWeeklyReport(student);

    return res.json({
      report,
      xp: student.xp,
      level: student.level,
      careerReadiness:
        student.careerReadiness,
      goalProgress:
        student.goalProgress,
    });

  } catch (err) {

    console.error(err);

    return res.status(500).json({
      error:
        "Failed to generate report",
    });

  }
}