import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";
import "./i18n/config";
import styled, { ThemeProvider } from "styled-components";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "./hooks/useThemeStore";
import { useI18nStore } from "./hooks/useI18nStore";
import { Language, Languages } from "./i18n/config";
import Options from "./components/Options";
import Results from "./components/Results";
import GlobalStyle from "./styles/globalStyle";
import { useState } from "react";
import { OptionIndexStatus } from "./data/options";
import { getThemeValue, lightTheme } from "./styles/theme";
import DropDownArrow from "./assets/drop-down-arrow.svg";
import { BsMoonFill, BsSun } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

const ThemeChange = styled.button`
  border: none;
  margin-inline-end: 12px;
  cursor: pointer;
`;
const LanguageSelect = styled.select`
  border: none;
  background-color: ${(props) =>
    getThemeValue(props.theme, "dropDownBackgroundColor")};
  background-image: url(${DropDownArrow});
  background-position: bottom 50% right 6%;
  padding: 8px 32px 8px 12px;
  box-shadow: 3px 3px 3px 0px rgba(26, 42, 58, 0.2);
  &:focus {
    outline: none;
  }
`;
const Option = styled.option``;
const H1 = styled.h1``;
const H1Span = styled.span`
  color: ${(props) => getThemeValue(props.theme, "themeColor")};
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
const UtilsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-block-start: 24px;
  margin-block-end: 24px;
  @media (max-width: 1376px) {
    margin-block-start: 18px;
    margin-block-end: 18px;
  }
  @media (max-width: 768px) {
    margin-block-start: 12px;
    margin-block-end: 12px;
  }
`;
const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  @media (max-width: 1376px) {
    gap: 36px;
  }
  @media (max-width: 768px) {
    gap: 12px;
  }
`;
const Main = styled.main`
  flex-basis: 0;
  flex-grow: 999;
  min-inline-size: 50%;
`;
const Aside = styled.aside`
  flex-basis: 420px;
  flex-grow: 1;
`;

const App = () => {
  const { t } = useTranslation();
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggle);
  const changeLanguage = useI18nStore((state) => state.change);
  const [primaryOptionIndex, setPrimaryOptionIndex] = useState(
    OptionIndexStatus.NoOption
  );
  const [secondaryOptionIndex, setSecondaryOptionIndex] = useState(
    OptionIndexStatus.NoOption
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageWrapper>
        <UtilsWrapper>
          <ThemeChange onClick={toggleTheme}>
            <IconContext.Provider
              value={{
                color: getThemeValue(theme, "toggleThemeButtonColor"),
                size: "24px",
              }}
            >
              {theme === lightTheme ? <BsSun /> : <BsMoonFill />}
            </IconContext.Provider>
          </ThemeChange>
          <LanguageSelect
            onChange={(event) => changeLanguage(event.target.value as Language)}
          >
            {Object.keys(Languages).map((language, index) => (
              <Option key={index} value={language}>
                {t(`languageSelect.${language}`)}
              </Option>
            ))}
          </LanguageSelect>
        </UtilsWrapper>
        <MainWrapper>
          <Aside>
            <H1>
              {t("header.part1")} <H1Span>{t("header.part2")}</H1Span>{" "}
              {t("header.part3")}
            </H1>
            <P>{t("options.description")}</P>
            <Options
              primaryOptionIndex={primaryOptionIndex}
              setPrimaryOptionIndex={setPrimaryOptionIndex}
              secondaryOptionIndex={secondaryOptionIndex}
              setSecondaryOptionIndex={setSecondaryOptionIndex}
            />
          </Aside>
          <Main>
            <Results
              primaryOptionIndex={primaryOptionIndex}
              secondaryOptionIndex={secondaryOptionIndex}
            />
          </Main>
        </MainWrapper>
      </PageWrapper>
    </ThemeProvider>
  );
};

export default App;
