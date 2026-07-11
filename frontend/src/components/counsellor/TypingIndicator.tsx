import { useCounsellorStore } from "../../store/counsellorStore";
import ThinkingBubble from "../counsellor/ThinkingBubble";

export default function TypingIndicator() {
  const { isThinking } = useCounsellorStore();

  if (!isThinking) return null;

  return (
    <>
      <div className="rounded-xl bg-slate-800 p-4 animate-pulse">
        AI is thinking...
      </div>
    </>
  );
}