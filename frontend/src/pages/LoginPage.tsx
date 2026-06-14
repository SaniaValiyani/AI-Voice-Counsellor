import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

import AnimatedBackground from "../components/layout/AnimatedBackground";
import { useLanguageStore } from "../store/languageStore";

export default function LoginPage() {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguageStore();
  return (
    <div className="relative min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative z-10"
      >
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl w-[420px]">
          <div className="flex flex-col items-center gap-4">
            <BrainCircuit
              size={60}
              className="text-cyan-400"
            />

            <h1 className="text-3xl font-bold text-white">
              AI Voice Counsellor
            </h1>

            <p className="text-slate-300 text-center">
              Multilingual Student Counselling Platform
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <select
              value={language}
              onChange={(e) =>
                setLanguage(
                  e.target.value as
                    | "English"
                    | "Hindi"
                    | "Gujarati"
                    | "Marathi"
                )
              }
              className="w-full rounded-xl bg-white border border-white/20 px-4 py-3 text-black"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Gujarati">Gujarati</option>
              <option value="Marathi">Marathi</option>
            </select>
            <input
              placeholder="Email"
              className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white outline-none"
            />

            <button
              onClick={() => navigate("/dashboard")}
              className="w-full rounded-xl bg-cyan-500 hover:bg-cyan-400 py-3 font-semibold text-black transition"
            >
              Login
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}