import { create } from "zustand";

interface ThemeState {
  darkMode: boolean;
  toggleTheme: () => void;
}

const savedTheme =
  localStorage.getItem("theme");

const initialDarkMode =
  savedTheme
    ? savedTheme === "dark"
    : true;

if (initialDarkMode) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

export const useThemeStore =
create<ThemeState>((set) => ({

  darkMode: initialDarkMode,

  toggleTheme: () =>

    set((state) => {

      const newTheme =
        !state.darkMode;

      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem(
          "theme",
          "dark"
        );
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem(
          "theme",
          "light"
        );
      }

      return {
        darkMode: newTheme,
      };
    }),

}));