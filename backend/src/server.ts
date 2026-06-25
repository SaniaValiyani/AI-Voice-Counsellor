import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chatRoutes";
import roadmapRoutes from "./routes/roadmapRoutes";
import goalRoutes from "./routes/goalRoutes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", chatRoutes);
app.use("/api", roadmapRoutes);
app.use(
  "/api/goals",
  goalRoutes
);

app.get("/", (_, res) => {
  res.json({
    message:
      "AI Voice Counsellor Backend Running",
  });
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on ${PORT}`
  );
});