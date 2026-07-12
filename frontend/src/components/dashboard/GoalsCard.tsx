import {
  useCounsellorStore,
} from "../../store/counsellorStore";

export default function GoalsCard() {
  const {
    studentProfile,
    toggleGoal,
    isGeneratingGoals,
  } = useCounsellorStore();

  const goals = studentProfile.goals || [];

  return (
    <div>
      🎯 Goals

      <div className="space-y-3">
        {isGeneratingGoals ? (
          <div className="text-slate-300">
            Generating goals for your career goal...
          </div>
        ) : goals.length === 0 ? (
          <div className="text-slate-300">
            {studentProfile.careerGoal
              ? "No goals generated yet. Your AI coach will create personalized goals from your career goal."
              : "Set your career goal to receive AI-generated learning goals."
            }
          </div>
        ) : (
          goals.map((goal) => (
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
          ))
        )}
      </div>
    </div>
  );
}