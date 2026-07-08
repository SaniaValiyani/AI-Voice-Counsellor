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
import path from "path";
import uploadRoutes from "./routes/uploadRoutes";
import memoryRoutes from "./routes/memoryRoutes";
import analyticsRoutes from "./routes/analyticsRoutes";
import reportRoutes from "./routes/reportRoutes";
import recommendationRoutes from "./routes/recommendationRoutes";
import profileRoutes from "./routes/profileRoutes";
import notificationRoutes from "./routes/notificationRoutes";
import settingsRoutes from "./routes/settingsRoutes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "../uploads")
  )
);

app.use("/api", chatRoutes);

app.use(
  "/api/roadmap",
  roadmapRoutes
);

app.use("/api/upload", uploadRoutes);

app.use("/api/memory", memoryRoutes);

app.use(
  "/api/goals",
  goalRoutes
);

app.use(
  "/api/student",
  studentRoutes
);

app.use(

"/api/notifications",

notificationRoutes

);

app.use(
  "/api/report",
  reportRoutes
);

app.use(
"/api/profile",
profileRoutes
);

app.use(
  "/api/chat-history",
  chatHistoryRoutes
);

app.use("/api/settings", settingsRoutes);

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/recommendations",
  recommendationRoutes
);

app.use(
  "/conversation",
  conversationRoutes
);

app.use(
  "/api/analytics",
  analyticsRoutes
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