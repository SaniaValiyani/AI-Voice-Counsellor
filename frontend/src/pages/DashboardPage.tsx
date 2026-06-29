import { motion } from "framer-motion";

import DashboardLayout from "../components/layout/DashboardLayout";

import RecentConversations from "../components/dashboard/RecentConversations";
import ProfileCard from "../components/dashboard/ProfileCard";
import GoalProgressCard from "../components/dashboard/GoalProgressCard";
import StreakCard from "../components/dashboard/StreakCard";
import AchievementsCard from "../components/dashboard/AchievementsCard";
import LevelCard from "../components/dashboard/LevelCard";
import AICoachCard from "../components/dashboard/AICoachCard";
import WeeklyChallengeCard from "../components/dashboard/WeeklyChallengeCard";
import StudyPlannerCard from "../components/dashboard/StudyPlannerCard";
import AchievementToast from "../components/dashboard/AchievementToast";
import GoalsCard from "../components/dashboard/GoalsCard";
import CareerReadinessCard from "../components/dashboard/CareerReadinessCard";
import NextGoalCard from "../components/dashboard/NextGoalCard";
import TimelineCard from "../components/dashboard/TimelineCard";
import AIInsightsCard from "../components/dashboard/AIInsightsCard";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        <WelcomeBanner />

        {/* Quick Stats */}

        <div className="grid gap-6 lg:grid-cols-4 mt-8">
          <CareerReadinessCard />
          <LevelCard />
          <StreakCard />
          <ProfileCard />
        </div>

        {/* Main Content */}

        <div className="grid gap-6 lg:grid-cols-2 mt-8">
          <GoalsCard />
          <AICoachCard />

          <NextGoalCard />
          <StudyPlannerCard />
        </div>

        {/* Bottom */}

        <div className="grid gap-6 lg:grid-cols-2 mt-8">
          <AchievementsCard />
          <TimelineCard />
        </div>

        <div className="mt-8">
          <RecentConversations />
        </div>

        <AchievementToast />
      </motion.div>
    </DashboardLayout>
  );
}