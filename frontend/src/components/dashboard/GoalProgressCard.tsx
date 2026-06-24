import {
  useCounsellorStore,
} from "../../store/counsellorStore";

export default function GoalProgressCard() {
  const {
    studentProfile,
  } =
    useCounsellorStore();

  const progress =
    Math.min(
      studentProfile.skills
        .length * 10,
      100
    );

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
        Goal Progress
      </h2>

      <div
        className="
        mt-4
        "
      >
        <div
          className="
          w-full
          h-3
          bg-slate-700
          rounded-full
          "
        >
          <div
            className="
            h-3
            bg-cyan-400
            rounded-full
            "
            style={{
              width:
                `${progress}%`,
            }}
          />
        </div>

        <p
          className="
          mt-2
          "
        >
          {progress}%
        </p>
      </div>
    </div>
  );
}