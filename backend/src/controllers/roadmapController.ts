import { Request, Response }
from "express";

import {
  generateRoadmap,
} from "../services/roadmapService";

export async function roadmapController(
  req: Request,
  res: Response
) {
  try {
    const { career } =
      req.body;

    const roadmap =
      await generateRoadmap(
        career
      );

    return res.json({
      roadmap,
    });
  } catch (error) {
    console.error(error);

    return res
      .status(500)
      .json({
        error:
          "Roadmap generation failed",
      });
  }
}