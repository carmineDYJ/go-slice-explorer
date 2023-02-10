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
  }
`;

export default GlobalStyle;
