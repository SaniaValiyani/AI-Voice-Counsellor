import { motion } from "framer-motion";
import DashboardLayout from "../components/layout/DashboardLayout";

//import ProfileHeader from "../components/profile/ProfileHeader";
import XPCard from "../components/profile/XPCard";
import SkillsCard from "../components/profile/SkillsCard";
import InterestsCard from "../components/profile/InterestsCard";
import CareerCard from "../components/profile/CareerCard";
import LinksCard from "../components/profile/LinksCard";
import ProgressCard from "../components/profile/ProgressCard";
import ProfileInfoCard from "../components/profile/ProfileInfoCard";
import ProfileBanner from "../components/profile/ProfileBanner";
import ResumeCard from "../components/profile/ResumeCard";

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <ProfileBanner />
        <ProfileInfoCard />

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="space-y-6 lg:col-span-2">
            <XPCard />
            <SkillsCard />
            <InterestsCard />
            <CareerCard />
          </div>

          <div className="space-y-6">
            <ProgressCard />
            <LinksCard />
            <ResumeCard />
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}