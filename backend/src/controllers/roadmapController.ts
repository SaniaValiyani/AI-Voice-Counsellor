import { Request, Response } from "express";

import Student from "../models/Student";
import { getMemory } from "../services/memoryService";
import { generateRoadmap } from "../services/roadmapService";

export async function roadmapController(
  req: Request,
  res: Response
) {
  try {
    const email =
      req.params.email;

    const profile =
      await Student.findOne({
        email,
      });

    if (!profile) {
      return res.status(404).json({
        error: "Student not found",
      });
    }

    const memory =
      await getMemory(
        profile._id.toString()
      );

    const roadmap =
      await generateRoadmap(
        profile,
        memory.memories
      );

    return res.json({
      roadmap,
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error:
        "Roadmap generation failed",
    });

  }
}