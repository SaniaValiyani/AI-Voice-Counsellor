import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request{
    userId?:string;
    userEmail?:string;
}

export function protect(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader =
      req.headers.authorization;

    if (
      !authHeader ||
      !authHeader.startsWith("Bearer ")
    ) {
      return res.status(401).json({
        error: "Unauthorized",
      });
    }

    const token =
      authHeader.split(" ")[1];

    const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET!
    ) as {
    id:string;
    email:string;
    };

    req.userId = decoded.id;
    req.userEmail = decoded.email;

    next();
  } catch {
    return res.status(401).json({
      error: "Invalid token",
    });
  }
}