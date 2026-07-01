export default function DailyMissionCard() {
  return (
    <div
      className="
      rounded-3xl
      bg-slate-900
      p-6
      border
      border-slate-700
      "
    >
      <h2 className="text-white font-bold mb-4">

        🎯 Daily Mission

      </h2>

      <ul className="space-y-3 text-slate-300">

        <li>✅ Complete one AI counselling session</li>

        <li>⬜ Learn one new technical skill</li>

        <li>⬜ Explore one internship</li>

      </ul>

    </div>
  );
}