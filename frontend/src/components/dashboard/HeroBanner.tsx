import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useCounsellorStore } from "../../store/counsellorStore";

export default function HeroBanner() {
  const profile = useCounsellorStore(
    (state) => state.studentProfile
  );

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  const xp = profile.xp || 0;

const streak = profile.learningStreak || 0;

const goal =
  profile.careerGoal || "your dream career";

const nextLevel = 1000;

const remainingXP =
  Math.max(nextLevel - xp, 0);

const messages = [
  `🔥 You're on a ${streak}-day learning streak. Keep it up!`,

  `🎯 Today's focus: Take one more step towards becoming ${goal}.`,

  `🚀 Only ${remainingXP} XP left to reach the next level!`,

  `📚 Complete today's AI counselling session to earn more XP.`,

  `💡 Small progress every day leads to big career success.`,
];

const dailyMessage =
  messages[
    new Date().getDate() %
      messages.length
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="
      col-span-full
      rounded-3xl
      overflow-hidden
      bg-linear-to-r
      from-cyan-500
      via-blue-600
      to-indigo-700
      p-8
      shadow-2xl
      "
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="text-cyan-100">

            👋 {greeting}

          </p>

          <h1 className="text-4xl font-bold text-white mt-2">

            Welcome back,
            {" "}
            {profile.name || "Student"}

          </h1>

          <p className="text-cyan-100 mt-4 max-w-xl leading-7">

            {dailyMessage}

          </p>

          <div className="flex gap-6 mt-6 text-white">

            <div>

              <p className="text-3xl font-bold">
                {xp}
              </p>

              <span className="text-cyan-100">
                XP
              </span>

            </div>

            <div>

              <p className="text-3xl font-bold">
                {streak}
              </p>

              <span className="text-cyan-100">
                Day Streak
              </span>

            </div>

            <div>

              <p className="text-3xl font-bold">

                {profile.skills?.length || 0}

              </p>

              <span className="text-cyan-100">

                Skills

              </span>

            </div>

          </div>

        </div>

        <button
          onClick={() => {
            window.location.href =
              "/counsellor";
          }}
          className="
          bg-white
          text-cyan-700
          px-6
          py-3
          rounded-2xl
          flex
          items-center
          gap-2
          font-semibold
          hover:scale-105
          transition
          "
        >
          Continue Learning

          <ArrowRight size={18} />

        </button>

      </div>

    </motion.div>
  );
}