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
  return (
    <div
      className={`flex ${
        sender === "user"
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-md rounded-2xl px-4 py-3 ${
          sender === "user"
            ? "bg-cyan-500 text-black"
            : "bg-slate-800 text-white"
        }`}
      >
        <p>{message}</p>

        <p className="text-xs mt-2 opacity-70">
          {timestamp}
        </p>
      </div>
    </div>
  );
}