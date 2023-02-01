import i18next, { ResourceLanguage } from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import zh from "./zh.json";

const Languages = {
  en: en,
  zh: zh,
};
export type Language = keyof typeof Languages;
type LanguageJson = typeof Languages[Language];

declare module "i18next" {
  export interface ResourceLanguage {
    translation: LanguageJson;
  }
}

const resources: Record<string, ResourceLanguage> | undefined = {
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
