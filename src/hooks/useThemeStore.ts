import { DefaultTheme } from "styled-components";
import { create } from "zustand";
import { darkTheme, lightTheme, themes } from "../styles/theme";

interface ThemeState {
  theme: typeof lightTheme;
  toggle: () => void;
}

export const useThemeStore = create<ThemeState>()((set) => ({
  theme: localStorage.getItem("theme")
    ? themes[localStorage.getItem("theme") as string] ?? lightTheme
    : lightTheme,
  toggle: () =>
    set((state) => {
      state.theme === lightTheme
        ? localStorage.setItem("theme", "dark")
        : localStorage.setItem("theme", "light");
      return state.theme === lightTheme
        ? { theme: darkTheme }
        : { theme: lightTheme };
    }),
}));
