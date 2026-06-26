import {
  useNavigate,
  useLocation,
} from "react-router-dom";

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
  const location = useLocation();

  return (
    <div>
      <div className="mb-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center text-black text-xl font-bold shadow-lg shadow-cyan-500/30">
            🎓
          </div>

          <div>
            <h1 className="text-white text-2xl font-extrabold tracking-tight">
              Counsellor AI
            </h1>

            <p className="text-slate-300 text-sm">
              Smart Career Guidance
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              onClick={() => navigate(item.path)}
              className={`
                group
                flex
                items-center
                gap-3
                w-full
                rounded-xl
                p-3
                transition-all
                duration-300

                ${
                  location.pathname === item.path
                    ? "bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/20"
                    : "text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                }
              `}
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