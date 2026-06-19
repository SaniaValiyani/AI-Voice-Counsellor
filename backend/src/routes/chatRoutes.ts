import { Router } from "express";

const router = Router();

router.post(
  "/chat",
  async (req, res) => {
    const { message } = req.body;

    return res.json({
      reply: `AI Response to: ${message}`,
    });
  }
);

export default router;