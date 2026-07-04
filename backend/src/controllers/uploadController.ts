import { Response } from "express";
import Student from "../models/Student";
import { AuthRequest } from "../middleware/authMiddleware";

export async function uploadProfileImage(
  req: AuthRequest,
  res: Response
) {
  try {
    const student = await Student.findById(
      req.userId
    );

    if (!student) {
      return res.status(404).json({
        error: "Student not found",
      });
    }

    student.profileImage =
      req.file?.path || "";

    await student.save();

    res.json(student);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Upload failed",
    });
  }
}

export async function uploadResume(
  req: AuthRequest,
  res: Response
) {
  try {
    const student = await Student.findById(
      req.userId
    );

    if (!student) {
      return res.status(404).json({
        error: "Student not found",
      });
    }

    student.resume =
      req.file?.path || "";

    await student.save();

    res.json(student);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Upload failed",
    });
  }
}