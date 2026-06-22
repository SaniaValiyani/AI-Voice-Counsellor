import { useCounsellorStore }
from "../../store/counsellorStore";

export default function MessageStatsCard() {
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
    <div className="
      bg-white/5
      backdrop-blur-lg
      p-5
      rounded-2xl
    ">
      <h2 className="text-white">
        Messages
      </h2>

      <p>
        User: {userMessages}
      </p>

      <p>
        AI: {aiMessages}
      </p>
    </div>
  );
}