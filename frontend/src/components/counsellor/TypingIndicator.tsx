import { useCounsellorStore } from "../../store/counsellorStore";

export default function TypingIndicator() {
  const { isThinking } =
    useCounsellorStore();

  if (!isThinking) return null;
  return (
    <div className="flex gap-2">
      <div className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce" />

      <div className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce delay-100" />

      <div className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce delay-200" />
    </div>
  );
}