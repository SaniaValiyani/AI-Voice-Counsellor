import { Trophy } from "lucide-react";
import { useCounsellorStore } from "../../store/counsellorStore";

export default function XPProgressCard() {
  const profile =
    useCounsellorStore(
      (state) => state.studentProfile
    );

  const xp = profile.xp || 0;

  const nextLevel = 1000;

  const progress =
    Math.min(
      (xp / nextLevel) * 100,
      100
    );

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
      <div className="flex items-center gap-3 mb-5">

        <Trophy className="text-yellow-400" />

        <h2 className="text-white font-bold">

          XP Progress

        </h2>

      </div>

      <div className="w-full h-3 rounded-full bg-slate-700">

        <div
          className="h-3 rounded-full bg-linear-to-r from-yellow-400 to-orange-500"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      <p className="text-slate-400 mt-4">

        {xp} / {nextLevel} XP

      </p>

    </div>
  );
}