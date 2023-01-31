import { create } from "zustand";

const lightTheme = {
  fontColor: "#1a2a3a",
  themeColor: "#3498db",
  backgroundColor: "#dddddd",
  dropDownBackgroundColor: "white",
};
//TODO add dark theme
const darkTheme = {
  fontColor: "red",
  themeColor: "red",
  backgroundColor: "",
  dropDownBackgroundColor: "",
};

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
