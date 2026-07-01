import { CheckCircle, Trophy, Bell } from "lucide-react";

const notifications = [
  {
    icon: Trophy,
    title: "Achievement unlocked",
    description: "Reached Level 5",
  },
  {
    icon: CheckCircle,
    title: "Daily Goal Completed",
    description: "Completed AI Counselling Session",
  },
  {
    icon: Bell,
    title: "Reminder",
    description: "Complete today's learning mission.",
  },
];

export default function NotificationDropdown() {
  return (
    <div
      className="
      absolute
      right-0
      mt-3
      w-96
      rounded-3xl
      bg-slate-900
      border
      border-slate-700
      shadow-2xl
      z-50
      "
    >
      <div className="p-5 border-b border-slate-700">

        <h2 className="text-white font-bold">

          Notifications

        </h2>

      </div>

      <div>

        {notifications.map((item, index) => {

          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
              p-5
              border-b
              border-slate-800
              hover:bg-slate-800
              cursor-pointer
              transition
              "
            >
              <div className="flex gap-3">

                <Icon className="text-cyan-400" />

                <div>

                  <p className="text-white font-medium">

                    {item.title}

                  </p>

                  <p className="text-slate-400 text-sm">

                    {item.description}

                  </p>

                </div>

              </div>

            </div>
          );

        })}

      </div>

    </div>
  );
}