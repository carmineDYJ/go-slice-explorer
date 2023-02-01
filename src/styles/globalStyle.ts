import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.backgroundColor};
    h1 {
      font-size: 24px;
    }
    h2 {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;
