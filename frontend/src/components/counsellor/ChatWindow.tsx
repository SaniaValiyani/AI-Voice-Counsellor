import ChatBubble from "./ChatBubble";

const messages = [
  {
    sender: "ai",
    message:
      "Hello! I am your AI Counsellor.",
  },
  {
    sender: "user",
    message:
      "I want guidance about engineering.",
  },
];

export default function ChatWindow() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-[500px] overflow-y-auto">
      <div className="space-y-4">
        {messages.map((msg, index) => (
          <ChatBubble
            key={index}
            sender={msg.sender as "user" | "ai"}
            message={msg.message}
          />
        ))}
      </div>
    </div>
  );
}