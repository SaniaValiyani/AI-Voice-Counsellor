import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BrainCircuit, Eye, EyeOff, Loader2 } from "lucide-react";

import AnimatedBackground from "../components/layout/AnimatedBackground";
import { useLanguageStore } from "../store/languageStore";
import { login } from "../services/authService";
import { useAuthStore } from "../store/authStore";

export default function LoginPage() {
  const navigate = useNavigate();
  const loginStore = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  
  const { language, setLanguage } = useLanguageStore();

  async function handleLogin() {
    setError("");

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    setLoading(true);

    try {
      const data = await login({
        email,
        password,
      });

      if (data.token) {
        loginStore(data.token, data.user);

        const profile = data.user.profile;

        if (
          !profile ||
          !profile.careerGoal ||
          profile.careerGoal === ""
        ) {
          navigate("/profile-setup");
        } else {
          navigate("/dashboard");
        }
        return;
      }

      setError(data.error || "Login failed.");
    } catch {
      setError("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen app-bg flex items-center justify-center overflow-hidden">
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
        <div className="backdrop-blur-xl app-card-glass border border-white/20 rounded-3xl p-10 shadow-2xl w-105">
          <div className="flex flex-col items-center gap-4">
            <BrainCircuit
              size={60}
              className="text-cyan-400"
            />

            <h1 className="text-3xl font-bold app-text">
              AI Voice Counsellor
            </h1>

            <p className="app-text-muted text-center">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full rounded-xl app-card-glass border border-white/20 px-4 py-3 app-text outline-none"
            />

            <div className="relative">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Password"
                className="w-full rounded-xl app-card-glass border border-white/20 px-4 py-3 pr-12 app-text outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

            {
              error && (
                <p className="text-red-400 text-sm">
                  {error}
                </p>
              )
            }

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full rounded-xl bg-cyan-500 hover:bg-cyan-400 py-3 font-semibold text-black transition"
            >
              {loading ? (
                <Loader2
                  className="animate-spin mx-auto"
                  size={20}
                />
              ) : (
                "Login"
              )}
            </button>
            <p className="text-center text-slate-400">

              Don't have an account?

              <Link
                to="/register"
                className="text-cyan-400 ml-2 hover:underline"
              >
                Register
              </Link>

            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}