import { motion } from "framer-motion";
import AIAvatar from "./AIAvatar";

interface Props {
  sender: "user" | "ai";
  message: string;
  timestamp: string;
}

export default function ChatBubble({
  sender,
  message,
  timestamp,
}: Props) {
  const isUser = sender === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div className={`flex items-end gap-3 max-w-[88%] ${isUser ? "flex-row-reverse" : "flex-row"}`}>
        {!isUser ? (
          <AIAvatar />
        ) : (
          <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-sm font-semibold text-white">
            U
          </div>
        )}

        <div
          className={`rounded-2xl px-4 py-3 shadow-lg ${
            isUser
              ? "bg-linear-to-r from-cyan-500 to-blue-500 text-slate-950"
              : "bg-white/10 backdrop-blur-lg border border-white/10 text-white"
          }`}
        >
          <p className={`text-[10px] uppercase tracking-[0.2em] mb-1 ${isUser ? "text-slate-800/65" : "text-slate-300/60"}`}>
            {isUser ? "User" : "AI"}
          </p>
          <p className="whitespace-pre-wrap leading-relaxed">{message}</p>
          <p className={`text-xs mt-2 ${isUser ? "text-slate-800/70" : "text-slate-300/70"}`}>
            {timestamp}
          </p>
        </div>
      </div>
    </motion.div>
  );
}