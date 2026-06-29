import {
  Bell,
  Moon,
  Sun,
  Search,
  Flame,
  Trophy,
} from "lucide-react";

import { useThemeStore } from "../../store/themeStore";
import { useCounsellorStore } from "../../store/counsellorStore";

export default function Topbar() {
  const { darkMode, toggleTheme } =
    useThemeStore();

  const profile =
    useCounsellorStore(
      (state) => state.studentProfile
    );

  return (
    <header
      className="
      h-20
      border-b
      border-slate-800
      bg-slate-950/90
      backdrop-blur-xl
      flex
      items-center
      justify-between
      px-8
      sticky
      top-0
      z-40
      "
    >
      {/* Left */}

      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-slate-400">
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
            bg-slate-900
            border
            border-slate-700
            py-2.5
            pl-11
            pr-4
            text-white
            outline-none
            focus:border-cyan-500
            "
          />

        </div>

        {/* XP */}

        <div className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2">

          <Trophy
            size={18}
            className="text-yellow-400"
          />

          <span className="text-white">

            {profile.xp} XP

          </span>

        </div>

        {/* Streak */}

        <div className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2">

          <Flame
            size={18}
            className="text-orange-400"
          />

          <span className="text-white">

            {profile.learningStreak} Days

          </span>

        </div>

        {/* Theme */}

        <button
          onClick={toggleTheme}
          className="
          rounded-xl
          bg-slate-900
          p-3
          hover:bg-slate-800
          transition
          "
        >
          {darkMode ? (
            <Sun className="text-yellow-300" />
          ) : (
            <Moon className="text-white" />
          )}
        </button>

        {/* Notification */}

        <button
          className="
          relative
          rounded-xl
          bg-slate-900
          p-3
          hover:bg-slate-800
          transition
          "
        >
          <Bell className="text-white" />

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

          S

        </div>

      </div>
    </header>
  );
}