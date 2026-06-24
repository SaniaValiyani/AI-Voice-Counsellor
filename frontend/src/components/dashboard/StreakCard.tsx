import {
  useCounsellorStore,
} from "../../store/counsellorStore";

export default function StreakCard() {
  const {
    studentProfile,
  } =
    useCounsellorStore();

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
        text-white
        text-xl
        "
      >
        Learning Streak
      </h2>

      <p
        className="
        text-4xl
        mt-3
        "
      >
        🔥
        {
          studentProfile
            .learningStreak
        }
      </p>

      <p>
        days
      </p>
    </div>
  );
}