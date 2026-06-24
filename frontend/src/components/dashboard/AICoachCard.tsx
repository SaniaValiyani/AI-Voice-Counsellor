import {
  useCounsellorStore,
}
from "../../store/counsellorStore";

export default function AICoachCard() {
  const {
    studentProfile,
  } =
    useCounsellorStore();

  return (
    <div
      className="
      bg-gradient-to-r
      from-cyan-500/20
      to-blue-500/20
      rounded-2xl
      p-5
      "
    >
      <h2
        className="
        text-xl
        font-bold
        "
      >
        🤖 AI Coach
      </h2>

      <p className="mt-3">
        {
          studentProfile
            .careerGoal
            ? `Keep going! Your goal is ${studentProfile.careerGoal}. Focus on learning one new skill this week.`
            : "Set a career goal to receive personalized coaching."
        }
      </p>
    </div>
  );
}