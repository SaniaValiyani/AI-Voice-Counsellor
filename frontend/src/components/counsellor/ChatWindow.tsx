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
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-[500px] overflow-y-auto">
      <div className="space-y-4">
        {messages.map((msg, index) => (
          <ChatBubble
            key={index}
            sender={msg.sender}
            message={msg.message}
          />
        ))}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}