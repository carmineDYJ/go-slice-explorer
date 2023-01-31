import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import zh from "./zh.json";

export type Languages = "en" | "zh";

const resources: Record<Languages, any> = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
};

i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18next;
