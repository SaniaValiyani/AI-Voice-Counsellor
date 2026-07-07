import { Request, Response } from "express";

import Student from "../models/Student";
import ChatMessage from "../models/ChatMessage";

export async function getAnalytics(
  req: Request,
  res: Response
) {
  try {
    const totalStudents =
      await Student.countDocuments();

    const totalChats =
      await ChatMessage.countDocuments();

    const students =
      await Student.find();

    const averageXP =
      students.length === 0
        ? 0
        : Math.round(
            students.reduce(
              (sum, student) =>
                sum + student.xp,
              0
            ) / students.length
          );

    const averageReadiness =
      students.length === 0
        ? 0
        : Math.round(
            students.reduce(
              (sum, student) =>
                sum +
                student.careerReadiness,
              0
            ) / students.length
          );

    const languageStats: Record<
      string,
      number
    > = {};

    students.forEach((student) => {
      languageStats[
        student.preferredLanguage
      ] =
        (languageStats[
          student.preferredLanguage
        ] || 0) + 1;
    });

    res.json({
      totalStudents,
      totalChats,
      averageXP,
      averageReadiness,
      languageStats,
    });
  } catch {
    res.status(500).json({
      error: "Analytics failed",
    });
  }
}