import {
  useCounsellorStore,
}
from "../../store/counsellorStore";

export default function LevelCard() {
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
        text-xl
        text-white
        "
      >
        ⭐ Level
      </h2>

      <p
        className="
        text-5xl
        mt-4
        "
      >
        {
          studentProfile
            .level
        }
      </p>

      <p>
        XP:
        {" "}
        {
          studentProfile
            .xp
        }
      </p>
    </div>
  );
}