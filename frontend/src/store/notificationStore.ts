import { create } from "zustand";
import { getNotifications } from "../services/notificationService";

interface Notification {
  _id: string;
  title: string;
  message: string;
  icon?: string;
  read: boolean;
  createdAt: string;
}

interface NotificationState {
  notifications: Notification[];
  loading: boolean;

  load: () => Promise<void>;
}

export const useNotificationStore =
create<NotificationState>((set) => ({

  notifications: [],

  loading: false,

  load: async () => {

    set({ loading: true });

    try {

      const data =
        await getNotifications();

      set({
        notifications: data,
      });

    } finally {

      set({
        loading: false,
      });

    }

  },

}));