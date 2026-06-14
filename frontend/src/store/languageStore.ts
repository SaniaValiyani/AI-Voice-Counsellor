import { create } from "zustand";

type Language = "English" | "Hindi" | "Gujarati" | "Marathi";

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "English",

  setLanguage: (language) =>
    set({
      language,
    }),
}));