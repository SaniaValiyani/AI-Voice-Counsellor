import { Response } from "express";
import User from "../models/User";
import { AuthRequest } from "../middleware/authMiddleware";

export async function getSettings(
  req: AuthRequest,
  res: Response
) {
  const user = await User.findById(req.userId);

  if (!user) {
    return res.status(404).json({
      error: "User not found",
    });
  }

  res.json(user.settings);
}

export async function saveSettings(
  req: AuthRequest,
  res: Response
) {
  const user = await User.findById(req.userId);

  if (!user) {
    return res.status(404).json({
      error: "User not found",
    });
  }

  user.settings = {
    ...user.settings,
    ...req.body,
  };

  await user.save();

  res.json(user.settings);
}