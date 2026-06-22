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
        {/* Statistics */}
        <div className="grid lg:grid-cols-4 gap-6">
          <StatCard
            title="Students"
            value="154"
          />

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
        </div>

        {/* Main Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          <ProfileCard />
          <LeadChart />

          <SentimentCard />
          <SessionStats />
          <TopicInsights />
          <CareerInterestMeter />
          <SessionDuration />
        </div>

        {/* Secondary Widgets */}
        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          <LanguageChart />

          <LeadScoreWidget />
        </div>

        {/* Recent Conversations */}
        <div className="mt-8">
          <RecentConversations />
        </div>
      </motion.div>
    </DashboardLayout>
  );
}