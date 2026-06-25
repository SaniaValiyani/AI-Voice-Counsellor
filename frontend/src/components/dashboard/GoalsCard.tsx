import {
  useCounsellorStore,
} from "../../store/counsellorStore";

export default function GoalsCard() {
  const {
    studentProfile,
    toggleGoal,
  } = useCounsellorStore();

  return (
    <div>
      🎯 Goals

      <div
        className="
        space-y-3
        "
      >
        {(studentProfile.goals || []).map(
          (goal) => (
            <div
              key={goal.id}
              className="
              bg-white/5
              rounded-xl
              p-3
              flex
              gap-3
              items-center
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
                className={`
                  flex-1
                  ${
                    goal.completed
                      ? "line-through"
                      : ""
                  }
                `}
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