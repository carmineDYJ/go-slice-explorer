import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";
import "./i18n/config";
import styled, { ThemeProvider } from "styled-components";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "./hooks/useThemeStore";
import Options from "./components/Options";
import Results from "./components/Results";
import GlobalStyle from "./styles/globalStyle";
import { useState } from "react";
import { OptionIndexStatus } from "./data/options";
import { getThemeValue, lightTheme } from "./styles/theme";
import Utils from "./components/Utils";

const Title = styled.h1``;
const TitleSpan = styled.span`
  color: ${(props) => getThemeValue(props.theme, "themeColor")};
`;
const Slogan = styled.p``;
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
        <Utils />
        <MainWrapper>
          <Aside>
            <Title>
              {t("header.part1")} <TitleSpan>{t("header.part2")}</TitleSpan>{" "}
              {t("header.part3")}
            </Title>
            <Slogan>{t("options.description")}</Slogan>
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
