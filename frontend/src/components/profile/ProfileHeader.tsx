import { useCounsellorStore } from "../../store/counsellorStore";

export default function ProfileHeader() {
  const profile = useCounsellorStore((s) => s.studentProfile);

  return (
    <div className="p-6 rounded-2xl bg-slate-900
border
border-slate-800
hover:border-cyan-500/40
hover:shadow-lg
hover:shadow-cyan-500/10
transition-all
duration-300">
      <h1 className="text-2xl font-bold text-white">
        {profile.name || "Your Name"}
      </h1>

      <p className="text-slate-400">
        {profile.careerGoal || "Set your career goal"}
      </p>
    </div>
  );
}