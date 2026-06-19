import { useState } from "react";
import { Send } from "lucide-react";

import { useCounsellorStore } from "../../store/counsellorStore";
import { sendChat } from "../../services/chatService";

export default function ChatInput() {
  const [message, setMessage] =
    useState("");

  const { addMessage } =
    useCounsellorStore();

  const sendMessage = async () => {
    if (!message.trim()) return;

    addMessage({
      sender: "user",
      message,
      timestamp:
        new Date().toLocaleTimeString(),
    });
    const userMessage = message;

    setMessage("");

    const data =
      await sendChat(userMessage);

    addMessage({
      sender: "ai",
      message: data.reply,
      timestamp:
        new Date().toLocaleTimeString(),
    });

  };

  return (
    <div className="flex gap-3">
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        placeholder="Ask anything..."
        className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white"
      />

      <button
        onClick={sendMessage}
        className="bg-cyan-500 px-4 rounded-xl"
      >
        <Send />
      </button>
    </div>
  );
}