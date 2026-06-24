export default function StudyPlannerCard() {
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
        📅 Today's Plan
      </h2>

      <ul
        className="
        mt-3
        space-y-2
        "
      >
        <li>
          • 30 min Learning
        </li>

        <li>
          • 1 Coding Problem
        </li>

        <li>
          • Review Notes
        </li>
      </ul>
    </div>
  );
}