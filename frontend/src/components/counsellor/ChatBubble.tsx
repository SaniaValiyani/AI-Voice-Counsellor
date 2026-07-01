import { motion } from "framer-motion";
import AIAvatar from "./AIAvatar";
import ResourceCard from "./ResourceCard";
import { parseResources } from "../../utils/resourceParser";

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

  const resources = parseResources(message);

  const formattedText = message.replace(
    /(https?:\/\/[^\s]+)/g,
    ""
  );

  const lines = formattedText.split("\n");

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale : 1 }}
      transition={{ duration: 0.35 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`flex items-end gap-3 max-w-[88%] ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {!isUser ? (
          <AIAvatar />
        ) : (
          <div
            className="
              h-11
              w-11
              rounded-full
              bg-linear-to-br
              from-cyan-400
              to-blue-600
              flex
              items-center
              justify-center
              font-bold
              text-white
              shadow-lg
              shadow-cyan-500/30
            "
          >
            S
          </div>
        )}

<div
  className={`rounded-3xl px-6 py-5 shadow-lg ${
    isUser
      ? "bg-linear-to-r from-cyan-400 via-sky-500 to-blue-600 text-slate-950"
      : "bg-slate-900/80 backdrop-blur-xl border border-cyan-500/10 text-white shadow-xl shadow-cyan-500/5"
  }`}
>
          <p
            className={`text-[10px] uppercase tracking-[0.2em] mb-1 ${
              isUser ? "text-slate-800/65" : "text-slate-300/60"
            }`}
          >
            {isUser ? "You" : "CareerPilot AI"}
          </p>

          <div className="leading-8 space-y-2">
            {lines.map((line, index) => {
              const isSectionHeading =
                line.startsWith("🚀") ||
                line.startsWith("📚") ||
                line.startsWith("🎓") ||
                line.startsWith("🛠") ||
                line.startsWith("💼") ||
                line.startsWith("🔗") ||
                line.startsWith("❓");

              return (
                <p
                  key={index}
                  className={
                    isSectionHeading
                      ? "font-semibold text-cyan-300 text-lg mt-5 mb-2"
                      : "whitespace-pre-wrap"
                  }
                >
                  {line}
                </p>
              );
            })}
          </div>

          {resources.length > 0 && (
            <div className="grid gap-3 mt-4">
              {resources.map((resource) => (
                <ResourceCard
                  key={resource.url}
                  title={resource.title}
                  url={resource.url}
                />
              ))}
            </div>
          )}

          <p
            className={`text-[11px] mt-4 opacity-70 ${
              isUser ? "text-slate-800/70" : "text-slate-300/70"
            }`}
          >
            {timestamp}
          </p>
        </div>
      </div>
    </motion.div>
  );
}