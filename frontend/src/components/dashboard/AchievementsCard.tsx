import {
  useCounsellorStore,
}
from "../../store/counsellorStore";

export default function AchievementsCard() {
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
        mb-4
        "
      >
        🏆 Achievements
      </h2>

      <div
        className="
        space-y-2
        "
      >
        {(studentProfile.achievements || []).map(
            (
              achievement
            ) => (
              <div
                key={
                  achievement
                }
              >
                🏅{" "}
                {
                  achievement
                }
              </div>
            )
          )}
      </div>
    </div>
  );
}