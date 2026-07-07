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
  Trophy,
  CalendarDays,
  Target,
  LogOut,
  User,
} from "lucide-react";

import {
  useConversationStore
} from "../../store/conversationStore";

import { useCounsellorStore }
from "../../store/counsellorStore";
import { Sparkles } from "lucide-react";

const menuItems = [
  {
    section: "MAIN",
    items: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "AI Counsellor",
        path: "/counsellor",
        icon: Headphones,
      },
      {
        title: "Analytics",
        path: "/analytics",
        icon: BarChart3,
      },
      {
        title: "Reports",
        path: "/reports",
        icon: FileText,
      },
      {
        title: "Recommendations",
        icon: Sparkles,
        path: "/recommendations",
      },
      {
        title:"Profile",
        path:"/profile",
        icon:User,
      },
    ],
  },

  {
    section: "LEARNING",
    items: [
      {
        title: "Goals",
        path: "/dashboard",
        icon: Target,
      },
      {
        title: "Planner",
        path: "/dashboard",
        icon: CalendarDays,
      },
      {
        title: "Achievements",
        path: "/dashboard",
        icon: Trophy,
      },
    ],
  },

  {
    section: "SYSTEM",
    items: [
      {
        title: "Settings",
        path: "/settings",
        icon: Settings,
      },
      {
        title: "Logout",
        path: "/",
        icon: LogOut,
      },
    ],
  },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const conversations =
    useConversationStore(
      (state) =>
        state.conversations
    );

  const setMessages =
    useCounsellorStore(
    (state)=>state.setMessages
    );

  return (
    <div className="w-80 h-screen bg-slate-950 border-r border-slate-800 flex flex-col justify-between p-6">
      <div>
        <div className="flex items-center gap-3 mb-10">
          <div className="text-3xl">🎓</div>

          <div>
            <h1 className="text-2xl font-extrabold app-text">
              Counsellor AI
            </h1>

            <p className="app-text-muted text-sm">
              Smart Career Guidance
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {menuItems.map((group) => (
            <div key={group.section}>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">
                {group.section}
              </p>

              <div className="space-y-2">
                {group.items.map((item) => {
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
                            ? "bg-linear-to-r from-cyan-500 to-sky-500 text-white shadow-lg"
                            : "app-text-muted hover:bg-cyan-500/10 hover:text-cyan-400"
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
          ))}
        </div>

        <div className="mt-10">
          <h3
            className="
              text-xs
              uppercase
              tracking-widest
              text-slate-500
              mb-4
            "
          >
            Recent Chats
          </h3>

          <div className="space-y-2">
            {conversations
              .slice(0, 5)
              .map((chat) => (
                <button
                  key={chat._id}
                  onClick={() => {
                    setMessages(chat.messages);
                    navigate("/counsellor");
                  }}
                  className="
                    w-full
                    rounded-lg
                    bg-slate-900
                    p-3
                    text-left
                    hover:bg-slate-800
                    transition
                  "
                >
                  <p
                    className="
                      text-white
                      truncate
                    "
                  >
                    {chat.messages.find(
                    (m:any)=>m.sender==="user"
                    )?.message ||
                    "No messages"}
                  </p>

                  <p
                    className="
                      text-xs
                      text-slate-400
                      mt-1
                    "
                  >
                    {new Date(
                      chat.createdAt
                    ).toLocaleDateString()}
                  </p>
                </button>
              ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-slate-800 pt-5">
        <div className="rounded-xl bg-slate-800 p-4">
          <p className="text-slate-400 text-sm">
            🚀 Daily Motivation
          </p>

          <p className="app-text mt-2 text-sm leading-6">
            Every expert was once a beginner.
            Keep learning.
          </p>
        </div>
      </div>
    </div>
  );
}