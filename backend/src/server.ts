import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chatRoutes";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", chatRoutes);

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