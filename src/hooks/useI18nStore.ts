import { create } from "zustand";
import i18next from "i18next";
import { Languages } from "../i18n/config";

interface I18nState {
  change: (by: Languages) => void;
}

//TODO store language in local storage
export const useI18nStore = create<I18nState>()((set) => ({
  change: (by: Languages) => {
    i18next.changeLanguage(by);
  },
}));
