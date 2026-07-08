import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en";
import hi from "./locales/hi";
import gu from "./locales/gu";
import mr from "./locales/mr";

i18n.use(initReactI18next).init({
  resources: {
    English: { translation: en },
    Hindi: { translation: hi },
    Gujarati: { translation: gu },
    Marathi: { translation: mr },
  },
  lng: "English",
  fallbackLng: "English",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;