import {
  useCounsellorStore,
} from "../../store/counsellorStore";

export default function GoalsCard() {

  const {
    studentProfile,
    toggleGoal,
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
        mb-4
        "
      >
        🎯 Goals
      </h2>

      <div
        className="
        space-y-3
        "
      >
        {(studentProfile.goals ||
          []).map(
          (goal) => (
            <div
              key={goal.id}
              className="
              flex
              items-center
              gap-3
              "
            >
              <input
                type="checkbox"
                checked={
                  goal.completed
                }
                onChange={() =>
                  toggleGoal(
                    goal.id
                  )
                }
              />

              <span
                className={
                  goal.completed
                    ? "line-through"
                    : ""
                }
              >
                {goal.title}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}