import { Mic } from "lucide-react";
import { motion } from "framer-motion";

export default function VoiceButton() {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      className="w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center"
    >
      <Mic
        size={32}
        className="text-black"
      />
    </motion.button>
  );
}