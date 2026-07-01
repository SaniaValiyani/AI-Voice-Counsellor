import { motion } from "framer-motion";

const bars = Array.from({ length: 14 });

export default function VoiceWave() {
  return (
    <div className="flex items-center justify-center gap-1 h-14">
      {bars.map((_, index) => (
        <motion.div
          key={index}
          className="w-1 rounded-full bg-linear-to-t from-cyan-400 via-sky-400 to-blue-500"
          animate={{
            height: [
              12,
              42 - (index % 4) * 4,
              20 + (index % 5) * 5,
              50 - (index % 3) * 6,
              12,
            ],
            opacity: [0.6, 1, 0.8, 1, 0.6],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.08,
          }}
        />
      ))}
    </div>
  );
}