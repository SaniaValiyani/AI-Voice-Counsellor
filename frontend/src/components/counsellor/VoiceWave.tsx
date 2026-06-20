import { motion } from "framer-motion";

const bars = [0.4, 0.7, 0.5, 0.9, 0.6, 1, 0.3, 0.8];

export default function VoiceWave() {
  return (
    <div className="flex items-end gap-1 h-8">
      {bars.map((height, index) => (
        <motion.span
          key={index}
          className="w-1.5 rounded-full bg-cyan-300"
          initial={{ height: 6 }}
          animate={{ height: `${height * 32}px` }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.08,
          }}
        />
      ))}
    </div>
  );
}