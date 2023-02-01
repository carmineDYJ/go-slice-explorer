import { create } from "zustand";
import i18next from "i18next";
import { Language } from "../i18n/config";

interface I18nState {
  change: (by: Language) => void;
}

//TODO store language in local storage
export const useI18nStore = create<I18nState>()((set) => ({
  change: (by: Language) => {
    i18next.changeLanguage(by);
  },
}));
