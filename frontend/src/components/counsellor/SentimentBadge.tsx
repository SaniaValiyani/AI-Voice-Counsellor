import { motion } from "framer-motion";
import { useCounsellorStore } from "../../store/counsellorStore";

export default function SentimentBadge() {
  const { sentiment } = useCounsellorStore();

  const styles = {
    Positive: "bg-emerald-500/15 text-emerald-300 border border-emerald-400/20",
    Neutral: "bg-amber-500/15 text-amber-300 border border-amber-400/20",
    Negative: "bg-rose-500/15 text-rose-300 border border-rose-400/20",
  };

  const emoji = {
    Positive: "😊",
    Neutral: "😐",
    Negative: "😟",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5"
    >
      <h2 className="text-white text-xl">Sentiment</h2>

      <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${styles[sentiment as keyof typeof styles]}`}>
        <span>{emoji[sentiment as keyof typeof emoji]}</span>
        <span>{sentiment}</span>
      </div>
    </motion.div>
  );
}