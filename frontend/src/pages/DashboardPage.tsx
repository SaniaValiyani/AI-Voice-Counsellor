import { motion } from "framer-motion";
import { useEffect } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";
import ProfileCard from "../components/dashboard/ProfileCard";
import GoalProgressCard from "../components/dashboard/GoalProgressCard";
import StreakCard from "../components/dashboard/StreakCard";
import AchievementsCard from "../components/dashboard/AchievementsCard";
import AICoachCard from "../components/dashboard/AICoachCard";
import StudyPlannerCard from "../components/dashboard/StudyPlannerCard";
import AchievementToast from "../components/dashboard/AchievementToast";
import GoalsCard from "../components/dashboard/GoalsCard";
import CareerReadinessCard from "../components/dashboard/CareerReadinessCard";
import NextGoalCard from "../components/dashboard/NextGoalCard";
import TimelineCard from "../components/dashboard/TimelineCard";
import AIInsightsCard from "../components/dashboard/AIInsightsCard";
import HeroBanner from "../components/dashboard/HeroBanner";
import XPProgressCard from "../components/dashboard/XPProgressCard";
import StatCard from "../components/dashboard/StatCard";
import SessionStats from "../components/dashboard/SessionStats";
import SessionDuration from "../components/dashboard/SessionDuration";
import TopicInsights from "../components/dashboard/TopicInsights";
import CareerInterestMeter from "../components/dashboard/CareerInterestMeter";
import MonthlyReportCard from "../components/dashboard/MonthlyReportCard";
import MessageStatsCard from "../components/dashboard/MessageStatsCard";

import { useCounsellorStore } from "../store/counsellorStore";
import { useDashboardStore } from "../store/dashboardStore";
import { useReport } from "../hooks/useReport";
import { exportDashboard } from "../utils/pdfExport";
import { useAnalytics } from "@/hooks/useAnalytics";
import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
import { useLocation } from "react-router-dom";

export default function DashboardPage() {
  const loadRoadmap = useCounsellorStore((s) => s.loadRoadmap);

  const loadGoals = useCounsellorStore((s) => s.loadGoals);
  const careerGoal = useCounsellorStore((s) => s.studentProfile.careerGoal);

  const load = useDashboardStore((s: any) => s.load);

  const analytics = useAnalytics();

  const report = useReport();

  const location = useLocation();

  useEffect(() => {
    loadRoadmap();
  }, []);

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    if (!careerGoal) return;
    loadGoals();
  }, [careerGoal, loadGoals]);

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    const timer = setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);

    return () => clearTimeout(timer);
  }, [location.hash]);

  const loading =
    analytics === undefined ||
    report === undefined;

  if (loading) {
    return (
      <DashboardLayout>
        <DashboardSkeleton />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div id="dashboard">
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {/* SECTION 1 */}

            <HeroBanner />

            <XPProgressCard />

            <StreakCard />

            <MessageStatsCard />

            {/* SECTION 2 */}

            <div className="col-span-full mt-4">
              <h2 className="text-2xl font-bold text-white border-b border-slate-700 pb-3 mb-2">
                📊 Overview
              </h2>
            </div>

            <StatCard
              title="Sessions"
              value={
                analytics?.totalSessions?.toString() ?? "0"
              }
            />

            <StatCard
              title="Languages"
              value={
                analytics?.languagesUsed?.toString() ?? "0"
              }
            />

            <StatCard
              title="Hot Leads"
              value={
                analytics?.hotLeads?.toString() ?? "0"
              }
            />

            {/* SECTION 3 */}

            <div
              id="goals"
              className="col-span-full mt-6 scroll-mt-28"
            >
              <h2 className="text-2xl font-bold text-white border-b border-slate-700 pb-3 mb-2">
                🎯 Goals & Progress
              </h2>
            </div>

            <GoalProgressCard />

            <CareerReadinessCard />

            <NextGoalCard />

            <TimelineCard />

            {/* SECTION 4 */}

            <div
              id="planner"
              className="col-span-full mt-6 scroll-mt-28"
            >
              <h2 className="text-2xl font-bold text-white border-b border-slate-700 pb-3 mb-2">
                🤖 AI Coach
              </h2>
            </div>

            <AICoachCard />

            <AIInsightsCard />

            <StudyPlannerCard />

            <TopicInsights />

            {/* SECTION 5 */}

            <div className="col-span-full mt-6">
              <h2 className="text-2xl font-bold text-white border-b border-slate-700 pb-3 mb-2">
                📈 Analytics
              </h2>
            </div>

            <SessionStats />

            <SessionDuration />

            <CareerInterestMeter />

            {/* SECTION 6 */}

            <div
              id="achievements"
              className="col-span-full mt-6 scroll-mt-28"
            >
              <h2 className="text-2xl font-bold text-white border-b border-slate-700 pb-3 mb-2">
                🏆 Achievements
              </h2>
            </div>

            <AchievementsCard />

            <MonthlyReportCard report={report} />

            <AchievementToast />

            {/* SECTION 7 */}

            <div className="col-span-full mt-6">
              <h2 className="text-2xl font-bold text-white border-b border-slate-700 pb-3 mb-2">
                👤 Student Profile
              </h2>
            </div>

            <ProfileCard />

            <GoalsCard />

            <TimelineCard />

            <div className="col-span-full flex justify-end mt-4">
              <button
                onClick={exportDashboard}
                className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                Export PDF
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}