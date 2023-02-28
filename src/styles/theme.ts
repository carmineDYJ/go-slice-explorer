import { DefaultTheme } from "styled-components";

// extend the DefaultTheme interface
type ThemeKey =
  | "fontColor"
  | "themeColor"
  | "backgroundColor"
  | "dropDownBackgroundColor"
  | "resultsBackgroundColor"
  | "resultsFontColor"
  | "resultsBannerColor";
type ExtendedTheme = Record<ThemeKey, string>;
declare module "styled-components" {
  export interface DefaultTheme extends ExtendedTheme {
    // fontColor?: string;
    // themeColor?: string;
    // backgroundColor?: string;
    // dropDownBackgroundColor?: string;
    // resultsBackgroundColor?: string;
    // resultsFontColor?: string;
    // resultsBannerColor?: string;
  }
}

export const lightTheme: DefaultTheme = {
  fontColor: "#1a2a3a",
  themeColor: "#3498db",
  backgroundColor: "#f6f6f6",
  dropDownBackgroundColor: "white",
  resultsBackgroundColor: "#1a2a3a",
  resultsFontColor: "white",
  resultsBannerColor: "#4a5a6a",
};
//TODO perfect dark theme
export const darkTheme: Partial<DefaultTheme> = {
  fontColor: "red",
};

export const getThemeValue = (theme: DefaultTheme, key: ThemeKey): string => {
  return theme[key] ?? lightTheme[key];
};
