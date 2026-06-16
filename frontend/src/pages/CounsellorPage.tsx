import DashboardLayout from "../components/layout/DashboardLayout";

import ChatWindow from "../components/counsellor/ChatWindow";
import TranscriptPanel from "../components/counsellor/TranscriptPanel";
import SentimentBadge from "../components/counsellor/SentimentBadge";
import LeadScoreCard from "../components/counsellor/LeadScoreCard";
import VoiceButton from "../components/counsellor/VoiceButton";
import TypingIndicator from "../components/counsellor/TypingIndicator";

export default function CounsellorPage() {
  return (
    <DashboardLayout>
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Side */}
        <div className="lg:col-span-2 space-y-6">
          <ChatWindow />

          <TypingIndicator />

          <div className="flex justify-center">
            <VoiceButton />
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          <TranscriptPanel />

          <SentimentBadge />

          <LeadScoreCard />
        </div>
      </div>
    </DashboardLayout>
  );
}