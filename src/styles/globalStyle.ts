import { createGlobalStyle } from "styled-components";
import { getThemeValue } from "./theme";

const GlobalStyle = createGlobalStyle`
  :root {
    color: ${(props) => getThemeValue(props.theme, "fontColor")};
    background-color: ${(props) =>
      getThemeValue(props.theme, "backgroundColor")};
    h1 {
      font-size: 24px;
    }
    h2 {
      font-size: 16px;
    }
    select {
      font-size: 14px;
    }
    option {
      font-size: 14px;
    }
    p {
      font-size: 14px;
    }
    code {
      font-size: 18px;
    }
    select {
      cursor: pointer;
    }
  }
`;

export default GlobalStyle;
