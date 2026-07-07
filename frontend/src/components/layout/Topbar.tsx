import {
  Bell,
  Moon,
  Sun,
  Search,
  Flame,
  Trophy,
} from "lucide-react";
import { LogOut } from "lucide-react";
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
    <header className="flex items-center justify-between">
      {/* Left */}

      <div>
        <h1 className="text-3xl font-bold app-text">
          Dashboard
        </h1>

        <p className="app-text-muted">
          Welcome back, keep learning 🚀
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-5">
        {/* Search */}

        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-3 text-slate-500"
          />

          <input
            placeholder="Search..."
            className="
              w-72
              rounded-xl
              app-card
              border
              border-slate-700
              py-2.5
              pl-11
              pr-4
              app-text
              outline-none
              focus:border-cyan-500
            "
          />
        </div>

        {/* XP */}

        <div className="flex items-center gap-2 rounded-xl app-card px-4 py-2">
          <Trophy
            size={18}
            className="text-yellow-400"
          />

          <span className="app-text">
            {profile.xp} XP
          </span>
        </div>

        {/* Streak */}

        <div className="flex items-center gap-2 rounded-xl app-card px-4 py-2">
          <Flame
            size={18}
            className="text-orange-400"
          />

          <span className="app-text">
            {profile.learningStreak} Days
          </span>
        </div>

        {/* Theme */}

        <button
          onClick={toggleTheme}
          className="
            rounded-xl
            app-card
            p-3
            hover:bg-slate-800
            transition
          "
        >
          {darkMode ? (
            <Sun className="text-yellow-300" />
          ) : (
            <Moon className="app-text" />
          )}
        </button>

        {/* Notification */}

        <div className="relative">
          <button
            onClick={() =>
              setShowNotifications(
                !showNotifications
              )
            }
            className="
              relative
              rounded-xl
              app-card
              p-3
              hover:bg-slate-800
              transition
            "
          >
            <Bell className="app-text" />

            <span
              className="
                absolute
                top-2
                right-2
                w-2.5
                h-2.5
                rounded-full
                bg-red-500
                animate-ping
              "
            />

            <span
              className="
                absolute
                top-2
                right-2
                w-2.5
                h-2.5
                rounded-full
                bg-red-500
              "
            />
          </button>

          {showNotifications && (
            <NotificationDropdown />
          )}
        </div>

        {/* Avatar */}

        <div
          className="
            w-11
            h-11
            rounded-full
            bg-linear-to-r
            from-cyan-500
            to-blue-600
            flex
            items-center
            justify-center
            text-white
            font-bold
            text-lg
            cursor-pointer
          "
        >
          {profile.careerGoal
            ? profile.careerGoal[0]
            : "S"}
        </div>

        {/* Logout */}

        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-red-500
            px-4
            py-2
            text-white
            hover:bg-red-600
            transition
          "
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
}