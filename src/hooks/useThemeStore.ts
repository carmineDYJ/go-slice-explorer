import { create } from "zustand";
import { darkTheme, lightTheme } from "../styles/theme";

interface ThemeState {
  theme: typeof lightTheme;
  toggle: () => void;
}

export const useThemeStore = create<ThemeState>()((set) => ({
  theme: lightTheme,
  toggle: () =>
    set((state) =>
      state.theme === lightTheme ? { theme: darkTheme } : { theme: lightTheme }
    ),
}));
