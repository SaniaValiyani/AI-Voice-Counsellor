import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Headphones,
  FileText,
  BarChart3,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Counsellor",
    path: "/counsellor",
    icon: Headphones,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: FileText,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-72 bg-slate-900 border-r border-slate-800 p-6">
      <h1 className="text-white text-2xl font-bold mb-10">
        🎓 Counsellor AI
      </h1>

      <div className="space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              onClick={() => navigate(item.path)}
              className="flex items-center gap-3 w-full p-3 rounded-xl text-slate-300 hover:bg-slate-800 transition"
            >
              <Icon size={20} />

              {item.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}