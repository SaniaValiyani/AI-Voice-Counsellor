import { motion } from "framer-motion";

import DashboardLayout from "../components/layout/DashboardLayout";

import StatCard from "../components/dashboard/StatCard";
import LeadChart from "../components/dashboard/LeadChart";
import SentimentCard from "../components/dashboard/SentimentCard";
import LanguageChart from "../components/dashboard/LanguageChart";
import LeadScoreWidget from "../components/dashboard/LeadScoreWidget";
import RecentConversations from "../components/dashboard/RecentConversations";
import SessionStats from "../components/dashboard/SessionStats";
import TopicInsights from "../components/dashboard/TopicInsights";
import CareerInterestMeter from "../components/dashboard/CareerInterestMeter";
import SessionDuration from "../components/dashboard/SessionDuration";
import ProfileCard from "../components/dashboard/ProfileCard";
import GoalProgressCard from "../components/dashboard/GoalProgressCard";
import StreakCard from "../components/dashboard/StreakCard";
import MonthlyReportCard from "../components/dashboard/MonthlyReportCard";
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
        <div
          className="
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-3
          "
        >
          {/* Statistics */}
          <StatCard
            title="Hot Leads"
            value="42"
          />

          <StatCard
            title="Sessions"
            value="89"
          />

          <StatCard
            title="Languages"
            value="4"
          />

          {/* Main Charts */}
          <AchievementToast />
          <ProfileCard />
          <LevelCard />
          <AchievementsCard />
          <GoalProgressCard />
          <GoalsCard />
          <StreakCard />
          <MonthlyReportCard />
          <AICoachCard />
          <WeeklyChallengeCard />
          <StudyPlannerCard />
          <CareerReadinessCard />
          <NextGoalCard />
          <TimelineCard />
          <AIInsightsCard />
          <LeadChart />
          <SentimentCard />
          <SessionStats />
          <TopicInsights />
          <CareerInterestMeter />
          <SessionDuration />

          {/* Secondary Widgets */}
          <LanguageChart />

          <LeadScoreWidget />

          {/* Recent Conversations */}
          <RecentConversations />
        </div>
      </motion.div>
    </DashboardLayout>
  );
}