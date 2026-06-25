import {
  useCounsellorStore
} from "../../store/counsellorStore";

export default function NextGoalCard() {

  const {
    studentProfile
  } =
    useCounsellorStore();

  const nextGoal =
    studentProfile.goals?.find(
      (goal) =>
        !goal.completed
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
        "
      >
        🎯 Recommended Next Goal
      </h2>

      <p
        className="
        mt-3
        "
      >
        {
          nextGoal?.title ||
          "All Goals Completed 🎉"
        }
      </p>
    </div>
  );
}