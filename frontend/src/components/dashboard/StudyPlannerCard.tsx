import { useCounsellorStore } from "../../store/counsellorStore";

export default function StudyPlannerCard() {

  const roadmap =
    useCounsellorStore(
      (s) => s.roadmap
    );

  return (
    <div>
      <h3>📅 Today's Plan</h3>

      <pre
        className="
        whitespace-pre-wrap
        text-sm
        leading-7
        text-slate-300
        "
      >
        {roadmap ||
          "Generate a roadmap by completing your profile."}
      </pre>
    </div>
  );
}