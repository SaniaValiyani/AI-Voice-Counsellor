import { motion } from "framer-motion";

export default function LeadScoreCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
    >
      <h2 className="text-white text-xl">Lead Score</h2>

      <div className="mt-4 flex items-end gap-2">
        <span className="text-5xl font-semibold text-cyan-300">87%</span>
      </div>

      <div className="mt-3 h-2 w-full bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full w-[87%] bg-linear-to-r from-cyan-400 to-blue-500 rounded-full" />
      </div>

      <p className="text-emerald-300 mt-3 font-medium">Hot Lead</p>
    </motion.div>
  );
}