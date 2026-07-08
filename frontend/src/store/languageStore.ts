import { create } from "zustand";
import i18n from "../i18n";

type Language = "English" | "Hindi" | "Gujarati" | "Marathi";

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "English",

  setLanguage: (language) => {
    i18n.changeLanguage(language);

    set({
      language,
    });
  },
}));