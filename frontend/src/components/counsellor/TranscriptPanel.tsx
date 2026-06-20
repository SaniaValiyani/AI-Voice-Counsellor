import { motion } from "framer-motion";
import { useCounsellorStore } from "../../store/counsellorStore";

export default function TranscriptPanel() {
  const { transcript } = useCounsellorStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5"
    >
      <h2 className="text-white text-xl mb-4">Live Transcript</h2>

      <p className="text-slate-300 leading-relaxed min-h-[80px]">
        {transcript || "Waiting for speech..."}
      </p>
    </motion.div>
  );
}