import { create } from "zustand";

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

const lightTheme = {
  fontColor: "#1a2a3a",
};

const darkTheme = {
  fontColor: "",
};
