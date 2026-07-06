import {
  useCounsellorStore,
} from "../../store/counsellorStore";

interface Props {
  report: any;
}

export default function MonthlyReportCard({
  report,
}: Props) {
  const {
    studentProfile,
  } = useCounsellorStore();

  return (
    <div>
      <h2 className="text-xl font-semibold">
        AI Progress Report
      </h2>

      <div
        className="
        mt-4
        space-y-2
        "
      >
        <p className="whitespace-pre-wrap text-sm leading-7">
          {
            report?.report ||
            "Generating Weekly Report..."
          }
        </p>

        <p>
          🎯 Goal:{" "}
          {
            studentProfile
              .careerGoal ||
            "Not Set"
          }
        </p>

        <p>
          📚 Skills:{" "}
          {
            studentProfile
              .skills
              .length
          }
        </p>

        <p>
          🔥 Streak:{" "}
          {
            studentProfile
              .learningStreak
          }{" "}
          days
        </p>

        <p>
          📈 Progress:{" "}
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