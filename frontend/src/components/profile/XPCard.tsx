import { useCounsellorStore } from "../../store/counsellorStore";

export default function XPCard() {
  const profile = useCounsellorStore((s) => s.studentProfile);

  return (
    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
      <h2 className="text-white font-semibold">XP Progress</h2>

      <p className="text-cyan-400 text-3xl font-bold mt-2">
        {profile.xp} XP
      </p>

      <p className="text-slate-400 mt-1">
        Level {profile.level}
      </p>
    </div>
  );
}