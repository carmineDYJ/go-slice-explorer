import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";
import "./i18n/config";
import styled, { ThemeProvider } from "styled-components";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "./hooks/useThemeStore";
import { useI18nStore } from "./hooks/useI18nStore";
import Options from "./components/Options";
import Results from "./components/Results";

const Button = styled.button``;
const H1 = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;
const H1Span = styled.span`
  color: ${(props) => props.theme.themeColor};
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  max-width: 1280px;
  margin-inline: auto;
`;
const Main = styled.main`
  flex-basis: 0;
  flex-grow: 999;
  min-inline-size: 50%;
  border: 1px solid red;
`;
const Aside = styled.aside`
  flex-basis: 340px;
  flex-grow: 1;
  border 1px solid blue;
`;

const App = () => {
  const { t } = useTranslation();
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggle);
  const changeLanguage = useI18nStore((state) => state.change);

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
      <Button onClick={() => changeLanguage("zh")}>Change Language</Button>
      <Wrapper>
        <Aside>
          <H1>
            {t("header.part1")} <H1Span>{t("header.part2")}</H1Span>{" "}
            {t("header.part3")}
          </H1>
          <Options />
        </Aside>
        <Main>
          <Results />
        </Main>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
