import { useEffect } from "react";

import { Bell } from "lucide-react";

import { useNotificationStore } from "../../store/notificationStore";

export default function NotificationDropdown() {

  const {
    notifications,
    load,
  } = useNotificationStore();

  useEffect(() => {

    load();

  }, []);

  return (

    <div className="absolute right-0 mt-3 w-80 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl z-50">

      <div className="p-4 border-b border-slate-800">

        <h3 className="text-white font-semibold">

          Notifications

        </h3>

      </div>

      <div className="max-h-96 overflow-y-auto">

        {notifications.length === 0 ? (

          <div className="p-6 text-center text-slate-400">

            No notifications

          </div>

        ) : (

          notifications.map((notification) => (

            <div
              key={notification._id}
              className="p-4 border-b border-slate-800 hover:bg-slate-800 transition"
            >

              <div className="flex gap-3">

                <Bell
                  size={18}
                  className="text-cyan-400 mt-1"
                />

                <div>

                  <p className="text-white font-medium">

                    {notification.title}

                  </p>

                  <p className="text-slate-400 text-sm">

                    {notification.message}

                  </p>

                </div>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );

}