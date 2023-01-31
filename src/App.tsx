import styled, { ThemeProvider } from "styled-components";
import { useThemeStore } from "./hooks/useThemeStore";

const H1 = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;
const H1Span = styled.span`
  color: ${(props) => props.theme.themeColor};
`;
const Button = styled.button``;

const App = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggle);

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
      <H1>
        Python <H1Span>Poetry</H1Span> Explorer
      </H1>
    </ThemeProvider>
  );
};

export default App;
