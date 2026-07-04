import { Router } from "express";
import Memory from "../models/Memory";

const router = Router();

router.get("/:studentId", async (req, res) => {
  const memory = await Memory.findOne({
    studentId: req.params.studentId,
  });

  res.json(memory);
});

export default router;