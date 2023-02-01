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
import GlobalStyle from "./styles/globalStyle";
import { Language, Languages } from "./i18n/config";

const Button = styled.button``;
const Select = styled.select``;
const Option = styled.option``;
const H1 = styled.h1``;
const H1Span = styled.span`
  color: ${(props) => props.theme.themeColor};
`;
const P = styled.p``;
const PageWrapper = styled.div`
  & {
    max-width: 1280px;
    margin-inline: auto;
    @media (max-width: 1376px) {
      margin-inline: 48px;
    }
    @media (max-width: 768px) {
      width: 90vw;
      margin-inline: auto;
    }
  }
`;
const UtilsWrapper = styled.div``;
const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
`;
const Main = styled.main`
  flex-basis: 0;
  flex-grow: 999;
  min-inline-size: 50%;
`;
const Aside = styled.aside`
  flex-basis: 340px;
  flex-grow: 1;
`;

const App = () => {
  const { t } = useTranslation();
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggle);
  const changeLanguage = useI18nStore((state) => state.change);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageWrapper>
        <UtilsWrapper>
          <Button onClick={toggleTheme}>Toggle Theme</Button>
          <Select
            onChange={(event) => changeLanguage(event.target.value as Language)}
          >
            {Object.keys(Languages).map((language, index) => (
              <Option key={index} value={language}>
                {t("languageSelect." + language)}
              </Option>
            ))}
          </Select>
        </UtilsWrapper>
        <MainWrapper>
          <Aside>
            <H1>
              {t("header.part1")} <H1Span>{t("header.part2")}</H1Span>{" "}
              {t("header.part3")}
            </H1>
            <P>{t("options.description")}</P>
            <Options />
          </Aside>
          <Main>
            <Results />
          </Main>
        </MainWrapper>
      </PageWrapper>
    </ThemeProvider>
  );
};

export default App;
