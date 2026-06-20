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
      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 h-125 overflow-y-auto"
    >
      <div className="space-y-4">
        {messages.map((msg, index) => (
          <ChatBubble
            key={index}
            sender={msg.sender}
            message={msg.message}
            timestamp={msg.timestamp}
          />
        ))}

        <div ref={bottomRef} />
      </div>
    </motion.div>
  );
}