import {
  Bell,
  Moon,
  Sun,
  Search,
  Flame,
  Trophy,
  Star,
  LogOut,
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useThemeStore } from "../../store/themeStore";
import { useCounsellorStore } from "../../store/counsellorStore";
import { useAuthStore } from "../../store/authStore";
import NotificationDropdown from "./NotificationDropdown";

export default function Topbar() {
  const [showNotifications, setShowNotifications] =
    useState(false);

  const { darkMode, toggleTheme } =
    useThemeStore();

  const profile =
    useCounsellorStore(
      (state) => state.studentProfile
    );

  const logout =
    useAuthStore(
      (s) => s.logout
    );

  const navigate =
    useNavigate();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
      <div className="px-6 py-5">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

          {/* Left */}
          <div>
            <h1 className="text-3xl font-bold text-white">
              Welcome back 👋
            </h1>

            <p className="mt-1 text-sm text-slate-400">
              Continue your journey toward{" "}
              <span className="font-medium text-cyan-400">
                {profile.careerGoal || "your dream career"}
              </span>
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center">

            {/* Search */}
            <div className="relative w-full xl:w-80">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                placeholder="Search goals, reports..."
                className="
                  w-full
                  rounded-full
                  border
                  border-slate-700
                  bg-slate-900/80
                  py-3
                  pl-11
                  pr-4
                  text-sm
                  text-slate-200
                  outline-none
                  transition-all
                  focus:border-indigo-500
                  focus:ring-2
                  focus:ring-indigo-500/20
                "
              />
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-3">

              <div className="app-card rounded-xl px-4 py-2">
                <div className="flex items-center gap-3">
                  <Trophy
                    className="text-yellow-400"
                    size={18}
                  />

                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-slate-400">
                      XP
                    </p>

                    <p className="font-semibold text-white">
                      {profile.xp}
                    </p>
                  </div>
                </div>
              </div>

              <div className="app-card rounded-xl px-4 py-2">
                <div className="flex items-center gap-3">
                  <Flame
                    className="text-orange-400"
                    size={18}
                  />

                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-slate-400">
                      Streak
                    </p>

                    <p className="font-semibold text-white">
                      {profile.learningStreak} Days
                    </p>
                  </div>
                </div>
              </div>

              <div className="app-card rounded-xl px-4 py-2">
                <div className="flex items-center gap-3">
                  <Star
                    className="text-cyan-400"
                    size={18}
                  />

                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-slate-400">
                      Level
                    </p>

                    <p className="font-semibold text-white">
                      {profile.level}
                    </p>
                  </div>
                </div>
              </div>

              {/* Theme */}
              <button
                onClick={toggleTheme}
                className="
                  rounded-xl
                  app-card
                  p-3
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:scale-105
                "
              >
                {darkMode ? (
                  <Sun className="text-yellow-300" />
                ) : (
                  <Moon className="text-slate-300" />
                )}
              </button>

              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() =>
                    setShowNotifications(!showNotifications)
                  }
                  className="
                    relative
                    rounded-xl
                    app-card
                    p-3
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:scale-105
                  "
                  aria-label="Notifications"
                >
                  <Bell className="text-slate-300" />

                  {/* Notification Dot */}
                  <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-red-500" />
                </button>

                {showNotifications && (
                  <NotificationDropdown />
                )}
              </div>

              {/* Profile */}
              <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-3 py-2 text-white shadow-lg">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-lg font-bold">
                  {profile.careerGoal?.[0] ?? "S"}
                </div>

                <div className="hidden sm:block">
                  <p className="text-xs text-cyan-100">
                    Career Goal
                  </p>

                  <p className="font-medium">
                    {profile.careerGoal || "Student"}
                  </p>
                </div>
              </div>

              {/* Logout */}
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="
                  rounded-xl
                  app-card
                  p-3
                  text-slate-300
                  transition-all
                  duration-200
                  hover:bg-red-500/10
                  hover:text-red-400
                  hover:-translate-y-0.5
                  hover:scale-105
                "
                title="Logout"
              >
                <LogOut size={18} />
              </button>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}