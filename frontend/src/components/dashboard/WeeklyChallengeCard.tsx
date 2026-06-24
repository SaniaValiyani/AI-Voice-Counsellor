export default function WeeklyChallengeCard() {
  return (
    <div
      className="
      bg-white/5
      rounded-2xl
      p-5
      "
    >
      <h2
        className="
        text-xl
        text-white
        "
      >
        🎯 Weekly Challenge
      </h2>

      <p className="mt-3">
        Complete 3 learning
        sessions this week.
      </p>

      <div
        className="
        mt-4
        bg-cyan-500/20
        rounded-lg
        p-3
        "
      >
        Reward:
        +50 XP
      </div>
    </div>
  );
}