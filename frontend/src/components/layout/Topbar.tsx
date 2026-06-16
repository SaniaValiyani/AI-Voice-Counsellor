import { Bell } from "lucide-react";

export default function Topbar() {
  return (
    <div className="h-20 border-b border-slate-800 flex items-center justify-between px-8">
      <div>
        <h1 className="text-white text-2xl font-bold">
          Dashboard
        </h1>

        <p className="text-slate-400">
          Monitor your counselling platform
        </p>
      </div>

      <button className="relative">
        <Bell className="text-white" />

        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500" />
      </button>
    </div>
  );
}