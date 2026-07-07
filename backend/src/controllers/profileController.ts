import { Response } from "express";
import Student from "../models/Student";
import { AuthRequest } from "../middleware/authMiddleware";

export async function getProfile(
  req: AuthRequest,
  res: Response
) {
  const student =
    await Student.findOne({
      email: req.userEmail,
    });

  res.json(student);
}

export async function updateProfile(
  req: AuthRequest,
  res: Response
) {
  const student =
    await Student.findOneAndUpdate(
      {
        email: req.userEmail,
      },
      req.body,
      {
        new: true,
      }
    );

  res.json(student);
}