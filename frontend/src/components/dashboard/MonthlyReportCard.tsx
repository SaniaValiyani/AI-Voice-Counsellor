import {
  useCounsellorStore,
} from "../../store/counsellorStore";

export default function MonthlyReportCard() {
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
        AI Progress Report
      </h2>

      <div
        className="
        mt-4
        space-y-2
        "
      >
        <p>
          🎯 Goal:
          {" "}
          {
            studentProfile
              .careerGoal ||
            "Not Set"
          }
        </p>

        <p>
          📚 Skills:
          {" "}
          {
            studentProfile
              .skills
              .length
          }
        </p>

        <p>
          🔥 Streak:
          {" "}
          {
            studentProfile
              .learningStreak
          } days
        </p>

        <p>
          📈 Progress:
          {" "}
          {Math.min(
            studentProfile
              .skills
              .length * 10,
            100
          )}
          %
        </p>
      </div>
    </div>
  );
}