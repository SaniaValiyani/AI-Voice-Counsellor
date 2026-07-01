import {
  Headphones,
  FileText,
  Target,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Talk to AI",
      icon: Headphones,
      path: "/counsellor",
    },
    {
      title: "View Reports",
      icon: FileText,
      path: "/reports",
    },
    {
      title: "Goals",
      icon: Target,
      path: "/dashboard",
    },
  ];

  return (
    <div
      className="
      rounded-3xl
      bg-slate-900
      p-6
      border
      border-slate-700
      "
    >
      <h2 className="text-white font-bold mb-5">

        ⚡ Quick Actions

      </h2>

      <div className="grid gap-3">

        {actions.map((action) => {

          const Icon = action.icon;

          return (
            <button
              key={action.title}
              onClick={() =>
                navigate(action.path)
              }
              className="
              flex
              items-center
              gap-3
              rounded-xl
              bg-slate-800
              p-3
              hover:bg-cyan-500
              transition
              "
            >
              <Icon />

              {action.title}

            </button>
          );

        })}

      </div>

    </div>
  );
}