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
//import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import HeroBanner from "../components/dashboard/HeroBanner";
import XPProgressCard from "../components/dashboard/XPProgressCard";
import DailyMissionCard from "../components/dashboard/DailyMissionCard";
import QuickActions from "../components/dashboard/QuickActions";
import StatCard from "../components/dashboard/StatCard";
import LeadChart from "../components/dashboard/LeadChart";
import LanguageChart from "../components/dashboard/LanguageChart";
import LeadScoreWidget from "../components/dashboard/LeadScoreWidget";
import SessionStats from "../components/dashboard/SessionStats";
import SessionDuration from "../components/dashboard/SessionDuration";
import SentimentCard from "../components/dashboard/SentimentCard";
import TopicInsights from "../components/dashboard/TopicInsights";
import CareerInterestMeter from "../components/dashboard/CareerInterestMeter";
import MonthlyReportCard from "../components/dashboard/MonthlyReportCard";

import { useEffect } from "react";
import { useCounsellorStore } from "../store/counsellorStore";

export default function DashboardPage() {
  const loadRoadmap =
  useCounsellorStore(
  (s)=>s.loadRoadmap
  );

  useEffect(()=>{

  loadRoadmap();

  },[]);
  
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
        <div className="grid gap-6 lg:grid-cols-4 mt-8">
          {/* SECTION 1 */}

          <HeroBanner />

          <XPProgressCard />

          <DailyMissionCard />

          <QuickActions />

          {/* SECTION 2 */}

          <div className="col-span-full mt-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-700 pb-3 mb-2">
              📊 Overview
            </h2>
          </div>

          <StatCard
            title="Sessions"
            value="89"
          />

          <StatCard
            title="Languages"
            value="4"
          />

          <StatCard
            title="Hot Leads"
            value="42"
          />

          <StreakCard />

          {/* SECTION 3 */}

          <div className="col-span-full mt-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-700 pb-3 mb-2">
              🎯 Goals & Progress
            </h2>
          </div>

          <GoalProgressCard />

          <CareerReadinessCard />

          <NextGoalCard />

          <TimelineCard />

          {/* SECTION 4 */}

          <div className="col-span-full mt-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-700 pb-3 mb-2">
              🤖 AI Coach
            </h2>
          </div>

          <AICoachCard />

          <AIInsightsCard />

          <StudyPlannerCard />

          <WeeklyChallengeCard />

          {/* SECTION 5 */}

          <div className="col-span-full mt-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-700 pb-3 mb-2">
              📈 Analytics
            </h2>
          </div>

          <LeadChart />

          <LanguageChart />

          <LeadScoreWidget />

          <SessionStats />

          <SessionDuration />

          <SentimentCard />

          <TopicInsights />

          <CareerInterestMeter />

          {/* SECTION 6 */}

          <div className="col-span-full mt-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-700 pb-3 mb-2">
              🏆 Achievements
            </h2>
          </div>

          <LevelCard />

          <AchievementsCard />

          <MonthlyReportCard />

          <AchievementToast />

          {/* SECTION 7 */}

          <div className="col-span-full mt-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-700 pb-3 mb-2">
              👤 Student Profile
            </h2>
          </div>

          <ProfileCard />

          <GoalsCard />

          {/* SECTION 8 */}

          <div className="col-span-full mt-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-700 pb-3 mb-2">
              💬 Recent Activity
            </h2>
          </div>

          <RecentConversations />
        </div>
      </motion.div>
    </DashboardLayout>
  );
}