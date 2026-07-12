import { motion } from "framer-motion";
import { useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import { useCounsellorStore } from "../store/counsellorStore";

export default function ProfilePage() {
  const navigate = useNavigate();

  const profile = useCounsellorStore(
    (s) => s.studentProfile
  );

  const loadStudentProfile =
    useCounsellorStore(
      (s) => s.loadStudentProfile
    );

  const persistProfile =
    useCounsellorStore(
      (s) => s.persistProfile
    );

  useEffect(() => {
    loadStudentProfile();
  }, []);

  const handleContinue = async () => {
    const saved = await persistProfile();
    if (saved) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
      >
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-cyan-500/10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white">
                Complete your profile
              </h1>
              <p className="mt-3 max-w-2xl text-slate-400 leading-relaxed">
                Tell us about yourself so the dashboard can deliver personalized recommendations, goals, and insights.
              </p>
            </div>

            <button
              disabled={!profile.careerGoal}
              onClick={handleContinue}
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-cyan-500 px-8 py-3 text-black font-semibold transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50 lg:mt-0"
            >
              Continue →
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <ProfileBanner />
            <ProfileInfoCard />
            <div className="grid gap-6 lg:grid-cols-2">
              <XPCard />
              <ProgressCard />
            </div>
            <SkillsCard />
            <InterestsCard />
            <CareerCard />
          </div>

          <div className="space-y-6">
            <LinksCard />
            <ResumeCard />
          </div>
        </div>
      </motion.div>
    </div>
  );
}