import { create } from "zustand";

interface User {

  id: string;

  fullName: string;

  email: string;

  profile: any;

}

interface AuthStore {

  user: User | null;

  token: string | null;

  isAuthenticated: boolean;

  login: (
    token: string,
    user: User
  ) => void;

  logout: () => void;

}

export const useAuthStore =
create<AuthStore>((set) => ({

  user:
    JSON.parse(
      localStorage.getItem(
        "user"
      ) || "null"
    ),

  token:
    localStorage.getItem(
      "token"
    ),

  isAuthenticated:
    !!localStorage.getItem(
      "token"
    ),

  login:
    (token, user) => {

      localStorage.setItem(
        "token",
        token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      set({

        token,

        user,

        isAuthenticated: true,

      });

    },

  logout: () => {

    localStorage.clear();

    set({

      token: null,

      user: null,

      isAuthenticated: false,

    });

  },

}));