import { DefaultTheme } from "styled-components";

// extend the DefaultTheme interface
declare module "styled-components" {
  export interface DefaultTheme {
    fontColor?: string;
    themeColor?: string;
    backgroundColor?: string;
    dropDownBackgroundColor?: string;
  }
}

export const lightTheme: DefaultTheme = {
  fontColor: "#1a2a3a",
  themeColor: "#3498db",
  backgroundColor: "#f6f6f6",
  dropDownBackgroundColor: "white",
};
//TODO perfect dark theme
export const darkTheme: DefaultTheme = {
  fontColor: "red",
};
