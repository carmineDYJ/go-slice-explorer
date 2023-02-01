import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    color: ${(props) => props.theme.fontColor};
  }
`;

export default GlobalStyle;
