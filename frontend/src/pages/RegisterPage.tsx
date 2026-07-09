import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

import AnimatedBackground from "../components/layout/AnimatedBackground";

import { register } from "../services/authService";
import { useAuthStore } from "../store/authStore";
import { useLanguageStore } from "../store/languageStore";
import { notify } from "../utils/toast";

export default function RegisterPage() {
  const navigate = useNavigate();

  const { language, setLanguage } =
    useLanguageStore();

  const login =
    useAuthStore(
      (state) => state.login
    );

  const [fullName, setFullName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleRegister = async () => {
    if (!fullName || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const data =
        await register({
          fullName,
          email,
          password,
        });

      login(
        data.token,
        data.user
      );

      notify.success(
        "Account created successfully!"
      );

      navigate("/dashboard");
    } catch (error: any) {
      alert(
        error?.response?.data?.error ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
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
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl w-107.5">
          {/* Logo */}

          <div className="flex flex-col items-center gap-4">
            <BrainCircuit
              size={60}
              className="text-cyan-400"
            />

            <h1 className="text-3xl font-bold text-white">
              Create Account
            </h1>

            <p className="text-slate-300 text-center">
              Join AI Voice Counsellor
            </p>
          </div>

          {/* Form */}

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
              <option value="English">
                English
              </option>

              <option value="Hindi">
                Hindi
              </option>

              <option value="Gujarati">
                Gujarati
              </option>

              <option value="Marathi">
                Marathi
              </option>
            </select>

            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) =>
                setFullName(
                  e.target.value
                )
              }
              className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white outline-none"
            />

            <button
              onClick={handleRegister}
              disabled={loading}
              className="w-full rounded-xl bg-cyan-500 hover:bg-cyan-400 py-3 font-semibold text-black transition"
            >
              {loading
                ? "Creating Account..."
                : "Register"}
            </button>

            <p className="text-center text-slate-300">
              Already have an account?{" "}
              <Link
                to="/"
                className="text-cyan-400 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}