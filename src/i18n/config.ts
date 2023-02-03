import i18next, { ResourceLanguage } from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import zh from "./zh";

export type Language = "en" | "zh";

export const Languages = {
  en: en,
  zh: zh,
};

type LanguageJson = typeof Languages[Language];

declare module "i18next" {
  export interface ResourceLanguage {
    translation: LanguageJson;
  }
}

const resources: Record<string, ResourceLanguage> = {
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
