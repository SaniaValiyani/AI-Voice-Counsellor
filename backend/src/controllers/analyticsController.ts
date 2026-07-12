import { Response } from "express";

import { AuthRequest } from "../middleware/authMiddleware";

import { getDashboardAnalytics } from "../services/dashboardAnalyticsService";

export async function getAnalytics(
  req: AuthRequest,
  res: Response
) {
  if (!req.userEmail) {
    return res.status(401).json({
      error: "Unauthorized",
    });
  }

  const data = await getDashboardAnalytics(
    req.userEmail
  );

  if (!data) {
    return res.status(404).json({
      error: "Student not found",
    });
  }

  res.json(data);
}
