import {
  Brain,
  Target,
  GraduationCap,
  Languages,
  Flame,
  Trophy,
} from "lucide-react";
import { useCounsellorStore } from "../../store/counsellorStore";
import MemoryStat from "./MemoryStat";

export default function AIMemoryPanel() {
  const profile = useCounsellorStore(
    (state) => state.studentProfile
  );

  const items = [
    {
      icon: <Target size={18} />,
      label: "Career Goal",
      value: profile.careerGoal || "Not set",
    },
    {
      icon: <GraduationCap size={18} />,
      label: "Education",
      value: profile.educationLevel || "Not set",
    },
    {
      icon: <Languages size={18} />,
      label: "Language",
      value: profile.preferredLanguage || "English",
    },
    {
      icon: <Trophy size={18} />,
      label: "XP",
      value: `${profile.xp}`,
    },
    {
      icon: <Flame size={18} />,
      label: "Learning Streak",
      value: `${profile.learningStreak} days`,
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Brain className="text-cyan-400" />
        <h2 className="text-xl font-semibold text-white">
          AI Memory
        </h2>
      </div>

      <div className="space-y-5">
        <div className="grid gap-4">
          {items.map((item) => (
            <MemoryStat
              key={item.label}
              icon={item.icon}
              title={item.label}
              value={item.value}
            />
          ))}
        </div>

        <div className="mt-6">
          <h3 className="text-cyan-300 mb-3">
            💻 Skills
          </h3>

          <div className="flex flex-wrap gap-2">
            {profile.skills?.length ? (
              profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    bg-cyan-500/20
                    px-3
                    py-1
                    text-sm
                    text-cyan-300
                  "
                >
                  {skill}
                </span>
              ))
            ) : (
              <span className="text-slate-500">
                None
              </span>
            )}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-pink-300 mb-3">
            ❤️ Interests
          </h3>

          <div className="flex flex-wrap gap-2">
            {profile.interests?.length ? (
              profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="
                    rounded-full
                    bg-pink-500/20
                    px-3
                    py-1
                    text-sm
                    text-pink-300
                  "
                >
                  {interest}
                </span>
              ))
            ) : (
              <span className="text-slate-500">
                None
              </span>
            )}
          </div>
        </div>

        <div className="mt-8 border-t border-slate-700 pt-4">
          <p className="text-xs text-slate-500">
            🧠 This information helps the AI personalize every response.
          </p>
        </div>
      </div>
    </div>
  );
}