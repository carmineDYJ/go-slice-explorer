import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";
import styled, { ThemeProvider } from "styled-components";
import { useTranslation } from "react-i18next";
import "./i18n/config";
import { useThemeStore } from "./hooks/useThemeStore";
import { useI18nStore } from "./hooks/useI18nStore";

const H1 = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;
const H1Span = styled.span`
  color: ${(props) => props.theme.themeColor};
`;
const Button = styled.button``;

const App = () => {
  const { t, i18n } = useTranslation();
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggle);
  const changeLanguage = useI18nStore((state) => state.change);

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
      <Button onClick={() => changeLanguage("zh")}>Change Language</Button>
      <H1>
        {t("header.part1")} <H1Span>{t("header.part2")}</H1Span>{" "}
        {t("header.part3")}
      </H1>
    </ThemeProvider>
  );
};

export default App;
