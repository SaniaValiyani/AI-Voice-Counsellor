import { useState } from "react";
import { Send } from "lucide-react";

import { useCounsellorStore } from "../../store/counsellorStore";
import { sendChat } from "../../services/chatService";

import { speakText } from "../../services/speechService";
import { useLanguageStore } from "../../store/languageStore";
import {
  extractProfile,
} from "../../utils/profileExtractor";

export default function ChatInput() {
  const [message, setMessage] = useState("");

  const { language } =
    useLanguageStore();

  const {
    addMessage,
    messages,
    setSentiment,
    updateProfile,
  } = useCounsellorStore();

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    addMessage({
      sender: "user",
      message: userMessage,
      timestamp: new Date().toLocaleTimeString(),
    });

    const profile =
      extractProfile(
        message
      );

    updateProfile(
      profile
    );

    setMessage("");

    const data = await sendChat(
      userMessage,
      messages
    );

    setSentiment(data.sentiment);

    addMessage({
      sender: "ai",
      message: data.reply,
      timestamp: new Date().toLocaleTimeString(),
    });

    speakText(
      data.reply,
      language
    );
  };

  return (
    <div className="flex gap-3 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-2">
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
        value={message}
        onChange={(e) =>
          setMessage(
            e.target.value
          )
        }
        placeholder="Ask anything..."
        className="flex-1 bg-transparent outline-none px-4 py-3 text-white placeholder:text-slate-400"
      />

      <button
        onClick={sendMessage}
        className="bg-linear-to-r from-cyan-500 to-blue-500 px-4 rounded-xl text-slate-950 font-medium"
      >
        <Send size={18} />
      </button>
    </div>
  );
}