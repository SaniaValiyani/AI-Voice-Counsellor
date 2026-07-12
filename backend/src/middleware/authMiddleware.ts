import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";

export interface AuthRequest extends Request {
  userId?: string;
  userEmail?: string;
}

export async function protect(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers.authorization;

    if (
      !authHeader ||
      !authHeader.startsWith("Bearer ")
    ) {
      return res.status(401).json({
        error: "Unauthorized",
      });
    }

    const token = authHeader.split(" ")[1];

    if (!process.env.JWT_SECRET) {
      return res.status(500).json({
        error: "Server authentication configuration is missing",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    ) as {
      id: string;
      email: string;
    };

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        error: "Unauthorized",
      });
    }

    req.userId = decoded.id;
    req.userEmail = user.email;

    next();
  } catch {
    return res.status(401).json({
      error: "Invalid token",
    });
  }
}