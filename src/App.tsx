import styled, { ThemeProvider } from "styled-components";
import { useThemeStore } from "./hooks/useThemeStore";

const H1 = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;
const Button = styled.button``;

const App = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggle);

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
      <H1>Python Poetry Explorer</H1>
    </ThemeProvider>
  );
};

export default App;
