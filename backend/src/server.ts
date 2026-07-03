import dotenv from "dotenv";

dotenv.config();

import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chatRoutes";
import roadmapRoutes from "./routes/roadmapRoutes";
import goalRoutes from "./routes/goalRoutes";
import { connectDB } from "./config/database";
import studentRoutes from "./routes/studentRoutes";
import chatHistoryRoutes from "./routes/chatHistoryRoutes";
import authRoutes from "./routes/authRoutes";
import conversationRoutes from "./routes/conversationRoutes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", chatRoutes);

app.use("/api", roadmapRoutes);

app.use(
  "/api/goals",
  goalRoutes
);

app.use(
  "/api/student",
  studentRoutes
);

app.use(
  "/api/chat-history",
  chatHistoryRoutes
);

app.use(
  "/auth",
  authRoutes
);

app.use(
  "/conversation",
  conversationRoutes
);

app.get("/", (_, res) => {
  res.json({
    message:
      "AI Voice Counsellor Backend Running",
  });
});

const PORT =
  process.env.PORT || 5000;

async function start() {
  await connectDB();

  app.listen(
    process.env.PORT || 5000,
    () => {
      console.log(
        "Server Running"
      );
    }
  );
}

start();