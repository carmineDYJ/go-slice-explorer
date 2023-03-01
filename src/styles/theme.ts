import { DefaultTheme } from "styled-components";

// extend the DefaultTheme interface
type ThemeKey =
  | "fontColor"
  | "themeColor"
  | "backgroundColor"
  | "toggleThemeButtonColor"
  | "dropDownBackgroundColor"
  | "resultsBackgroundColor"
  | "resultsFontColor"
  | "resultsBannerColor";
type ExtendedTheme = Record<ThemeKey, string>;
declare module "styled-components" {
  export interface DefaultTheme extends Partial<ExtendedTheme> {}
}

export const lightTheme: DefaultTheme = {
  fontColor: "#1a2a3a",
  themeColor: "#3498db",
  backgroundColor: "#f6f6f6",
  toggleThemeButtonColor: "#1a2a3a",
  dropDownBackgroundColor: "white",
  resultsBackgroundColor: "#1a2a3a",
  resultsFontColor: "white",
  resultsBannerColor: "#4a5a6a",
};
//TODO perfect dark theme
export const darkTheme: DefaultTheme = {
  fontColor: "#fffafa",
  backgroundColor: "#121212",
  toggleThemeButtonColor: "white",
  dropDownBackgroundColor: "#646464",
  resultsBackgroundColor: "#dddddd",
  resultsFontColor: "#1a2a3a",
};

export const themes: Record<string, DefaultTheme> = {
  light: lightTheme,
  dark: darkTheme,
};

export const getThemeValue = (theme: DefaultTheme, key: ThemeKey): string => {
  return theme[key] ?? lightTheme[key]!;
};
