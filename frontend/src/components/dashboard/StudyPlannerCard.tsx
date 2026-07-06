import { useCounsellorStore } from "../../store/counsellorStore";

export default function StudyPlannerCard() {
  const roadmap = useCounsellorStore((s) => s.roadmap);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">📅 Today's Plan</h2>

      {roadmap ? (
        <pre
          className="
            whitespace-pre-wrap
            text-sm
            leading-7
            text-slate-300
          "
        >
          {roadmap}
        </pre>
      ) : (
        <div className="animate-pulse text-slate-400">
          Generating your personalized roadmap...
        </div>
      )}
    </div>
  );
}