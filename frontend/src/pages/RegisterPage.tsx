import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BrainCircuit,
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";

import AnimatedBackground from "../components/layout/AnimatedBackground";
import { registerUser } from "../services/authService";
import { useAuthStore } from "../store/authStore";

export default function RegisterPage() {
  const navigate = useNavigate();

  const login = useAuthStore(
    (state) => state.login
  );

  const [fullName, setFullName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleRegister() {
    setError("");

    if (
      !fullName ||
      !email ||
      !password
    ) {
      setError(
        "Please fill all fields."
      );
      return;
    }

    if (
      password !==
      confirmPassword
    ) {
      setError(
        "Passwords do not match."
      );
      return;
    }

    setLoading(true);

    try {
      const data =
        await registerUser(
          fullName,
          email,
          password
        );

      if (data.token) {
        login(
          data.token,
          data.user
        );

        navigate("/dashboard");

        return;
      }

      setError(data.error);
    } finally {
      setLoading(false);
    }
  }

  const passwordStrength =
    password.length < 6
      ? "Weak"
      : password.length < 10
      ? "Medium"
      : "Strong";

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
        className="relative z-10"
      >
        <div className="backdrop-blur-xl app-card-glass border border-white/20 rounded-3xl p-10 shadow-2xl w-107.5">

          <div className="flex flex-col items-center gap-4">

            <BrainCircuit
              size={60}
              className="text-cyan-400"
            />

            <h1 className="text-3xl font-bold app-text">

              Create Account

            </h1>

          </div>

          <div className="mt-8 space-y-4">

            <input
              placeholder="Full Name"
              value={fullName}
              onChange={(e)=>
                setFullName(
                  e.target.value
                )
              }
              className="w-full rounded-xl app-card-glass border border-white/20 px-4 py-3 app-text"
            />

            <input
              placeholder="Email"
              value={email}
              onChange={(e)=>
                setEmail(
                  e.target.value
                )
              }
              className="w-full rounded-xl app-card-glass border border-white/20 px-4 py-3 app-text"
            />

            <div className="relative">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                value={password}
                onChange={(e)=>
                  setPassword(
                    e.target.value
                  )
                }
                placeholder="Password"
                className="w-full rounded-xl app-card-glass border border-white/20 px-4 py-3 pr-12 app-text"
              />

              <button
                type="button"
                onClick={()=>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword
                  ? <EyeOff size={18}/>
                  : <Eye size={18}/>}
              </button>

            </div>

            <div className="text-sm">

              Password Strength:

              <span
                className={`ml-2 ${
                  passwordStrength==="Strong"
                    ? "text-green-400"
                    : passwordStrength==="Medium"
                    ? "text-yellow-400"
                    : "text-red-400"
                }`}
              >

                {passwordStrength}

              </span>

            </div>

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e)=>
                setConfirmPassword(
                  e.target.value
                )
              }
              className="w-full rounded-xl app-card-glass border border-white/20 px-4 py-3 app-text"
            />

            {error && (
              <p className="text-red-400 text-sm">

                {error}

              </p>
            )}

            <button
              onClick={handleRegister}
              disabled={loading}
              className="w-full rounded-xl bg-cyan-500 hover:bg-cyan-400 py-3 font-semibold text-black"
            >
              {loading
                ? <Loader2 className="animate-spin mx-auto"/>
                : "Register"}
            </button>

            <p className="text-center text-slate-400">

              Already have an account?

              <Link
                to="/"
                className="text-cyan-400 ml-2"
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