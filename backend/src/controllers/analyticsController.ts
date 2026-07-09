import { Response } from "express";

import { AuthRequest } from "../middleware/authMiddleware";

import { getDashboardAnalytics } from "../services/dashboardAnalyticsService";

export async function analyticsController(

req: AuthRequest,

res: Response

) {

const data =
await getDashboardAnalytics(
req.userEmail!
);

if (!data)
return res.status(404).json({
error: "Student not found",
});

res.json(data);

}