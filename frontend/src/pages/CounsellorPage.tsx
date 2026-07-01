import { motion } from "framer-motion";
import DashboardLayout from "../components/layout/DashboardLayout";

import ChatWindow from "../components/counsellor/ChatWindow";
import TranscriptPanel from "../components/counsellor/TranscriptPanel";
import SentimentBadge from "../components/counsellor/SentimentBadge";
import LeadScoreCard from "../components/counsellor/LeadScoreCard";
import VoiceButton from "../components/counsellor/VoiceButton";
import TypingIndicator from "../components/counsellor/TypingIndicator";
import ClearChatButton from "../components/counsellor/ClearChatButton";
import ChatInput from "../components/counsellor/ChatInput";
import MuteButton from "../components/counsellor/MuteButton";
import ExportButtons from "../components/counsellor/ExportButtons";
import AIMemoryPanel from "../components/counsellor/AIMemoryPanel";

export default function CounsellorPage() {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="space-y-6"
      >
        <div>
          <h1 className="text-3xl font-bold text-cyan-400 flex items-center gap-2">
            <span
              style={{
                fontFamily:
                  '"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',
              }}
            >
              🤖
            </span>
            AI Voice Counsellor
          </h1>

          <p className="text-gray-600">Career Guidance Assistant</p>
        </div>

        <div
          className="
          grid
          xl:grid-cols-4
          gap-6
          items-start
          "
        >
          {/* Left Side */}
          <div className="xl:col-span-3 space-y-6">
            <div className="flex gap-3 flex-wrap">
              <ClearChatButton />
              <MuteButton />
              <ExportButtons />
            </div>
            
            <ChatWindow />

            <ChatInput />

            <TypingIndicator />

            <div className="flex justify-center">
              <VoiceButton />
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            <AIMemoryPanel />

            <TranscriptPanel />

            <SentimentBadge />

            <LeadScoreCard />
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}