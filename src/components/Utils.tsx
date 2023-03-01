import { useTranslation } from "react-i18next";
import { IconContext } from "react-icons";
import { BsMoonFill, BsSun } from "react-icons/bs";
import styled from "styled-components";
import { useI18nStore } from "../hooks/useI18nStore";
import { useThemeStore } from "../hooks/useThemeStore";
import { Language, Languages } from "../i18n/config";
import { getThemeValue, lightTheme } from "../styles/theme";
import DropDownArrow from "../assets/drop-down-arrow.svg";

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
  border-radius: 4px;
`;
const Option = styled.option``;

const Utils = () => {
  const { t } = useTranslation();
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggle);
  const changeLanguage = useI18nStore((state) => state.change);
  return (
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
  );
};

export default Utils;
