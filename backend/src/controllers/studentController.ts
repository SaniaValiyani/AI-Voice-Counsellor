import Student from "../models/Student";
import { AuthRequest } from "../middleware/authMiddleware";

export async function saveProfile(
  req: AuthRequest,
  res: any
) {
  try {
    const profile = await Student.findOneAndUpdate(
      {
        email: req.userEmail,
      },
      req.body,
      {
        new: true,
      }
    );

    if (!profile) {
      return res.status(404).json({
        error: "Profile not found",
      });
    }

    profile.roadmap = "";

    await profile.save();

    res.json(profile);
  } catch (error) {
    res.status(500).json({
      error: "Failed",
    });
  }
}

export async function getProfile(
  req: AuthRequest,
  res: any
) {
  try {
    const profile = await Student.findOne({
      email: req.userEmail,
    });

    if (!profile) {
      return res.status(404).json({
        error: "Profile not found",
      });
    }

    res.json(profile);
  } catch (error) {
    res.status(500).json({
      error: "Failed to load profile",
    });
  }
}