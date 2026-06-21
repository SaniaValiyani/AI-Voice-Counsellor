import { useCounsellorStore }
from "../../store/counsellorStore";

export default function SessionStats() {
  const { messages } =
    useCounsellorStore();

  const userMessages =
    messages.filter(
      (msg) =>
        msg.sender === "user"
    ).length;

  const aiMessages =
    messages.filter(
      (msg) =>
        msg.sender === "ai"
    ).length;

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-lg">
      <h3 className="text-lg font-semibold text-white mb-4">
        Session Stats
      </h3>

      <div className="space-y-3">
        <div className="flex items-center justify-between bg-white/5 rounded-xl p-3">
          <span className="text-gray-300">
            User Messages
          </span>

          <span className="font-bold text-cyan-400">
            {userMessages}
          </span>
        </div>

        <div className="flex items-center justify-between bg-white/5 rounded-xl p-3">
          <span className="text-gray-300">
            AI Messages
          </span>

          <span className="font-bold text-violet-400">
            {aiMessages}
          </span>
        </div>
      </div>
    </div>
  );
}