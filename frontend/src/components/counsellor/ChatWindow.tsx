import { motion } from "framer-motion";
import ChatBubble from "./ChatBubble";
import { useEffect, useRef } from "react";
import { useCounsellorStore } from "../../store/counsellorStore";

export default function ChatWindow() {
  const { messages } = useCounsellorStore();

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="
      bg-slate-900/70
      backdrop-blur-xl
      border
      border-cyan-500/10
      rounded-3xl
      p-6
      h-160
      overflow-y-auto
      scroll-smooth
      shadow-2xl
      shadow-cyan-500/5
      space-y-6
      "
    >

      {messages.length === 0 && (
        <div className="h-full flex flex-col items-center justify-center text-center">
          <div className="text-6xl mb-6">🤖</div>

          <h2 className="text-2xl font-bold text-white">
            Welcome to CareerPilot AI
          </h2>

          <p className="text-slate-400 mt-3 max-w-md">
            Ask about careers, internships, skills, learning paths,
            interview preparation, or higher studies.
          </p>
        </div>
      )}

      {messages.length > 0 && (
      <div className="space-y-6">

        {messages.map((msg, index) => (
        <ChatBubble
          key={index}
          sender={msg.sender}
          message={msg.message}
          timestamp={msg.timestamp}
        />
      ))}
      </div>
      )}
      <div ref={bottomRef} />

      <div ref={bottomRef} />
    </motion.div>
  );
}