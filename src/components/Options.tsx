import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {
  OptionIndexStatus,
  PrimaryOption,
  SecondaryOption,
} from "../data/options";
import dropDownArrow from "../assets/drop-down-arrow.svg";
import { getThemeValue } from "../styles/theme";

const H2 = styled.h2`
  color: ${(props) => getThemeValue(props.theme, "themeColor")};
`;
const OptionsSelect = styled.select`
  display: block;
  width: 100%;
  border: none;
  background-color: ${(props) =>
    getThemeValue(props.theme, "dropDownBackgroundColor")};
  background-image: url(${dropDownArrow});
  background-position: bottom 50% right 3%;
  padding: 8px 32px 8px 12px;
  box-shadow: 3px 3px 3px 0px rgba(26, 42, 58, 0.2);
  border-radius: 4px;

  &:focus {
    outline: none;
  }
  &:first-of-type {
    margin-bottom: 24px;
  }
`;
const Option = styled.option`
  :disabled {
    color: ${(props) => getThemeValue(props.theme, "fontColor")};
  }
`;

type OptionsProps = {
  primaryOptionIndex: number;
  setPrimaryOptionIndex: Dispatch<SetStateAction<number>>;
  secondaryOptionIndex: number;
  setSecondaryOptionIndex: Dispatch<SetStateAction<number>>;
};

const Options = (props: OptionsProps) => {
  const { t } = useTranslation();
  const {
    primaryOptionIndex,
    setPrimaryOptionIndex,
    secondaryOptionIndex,
    setSecondaryOptionIndex,
  } = props;
  const [primaryOptions, setPrimaryOptions] = useState<Array<PrimaryOption>>(
    t("primaryOptions", {
      returnObjects: true,
    })
  );
  const [secondaryOptions, setSecondaryOptions] = useState<
    Array<SecondaryOption> | undefined
  >();
  useEffect(() => {
    let secondaryOptions;
    if (primaryOptionIndex >= 0) {
      secondaryOptions = t(
        `secondaryOptions.${primaryOptions[primaryOptionIndex].key}`,
        {
          returnObjects: true,
        }
      );
      if (!Array.isArray(secondaryOptions)) {
        secondaryOptions = undefined;
      }
    } else {
      secondaryOptions = undefined;
    }
    setSecondaryOptions(secondaryOptions as Array<SecondaryOption> | undefined);
  }, [primaryOptionIndex]);
  return (
    <Fragment>
      <H2>{t("options.header")}</H2>
      <OptionsSelect
        defaultValue="placeholder"
        onChange={(event) => {
          setSecondaryOptionIndex(OptionIndexStatus.NoOption);
          setSecondaryOptions(undefined);
          const optionIndex = parseInt(event.target.value);
          setPrimaryOptionIndex(optionIndex);
        }}
      >
        {primaryOptionIndex >= OptionIndexStatus.HasOption ? (
          <Option disabled>...</Option>
        ) : (
          <Option disabled value="placeholder">
            {t("optionSelect.placeholder")}
          </Option>
        )}
        {primaryOptions.map((option, index) => (
          <Option key={index} value={index}>
            {t(`primaryOptions.${index}.option`)}
          </Option>
        ))}
      </OptionsSelect>
      {secondaryOptions ? (
        <OptionsSelect
          defaultValue="placeholder"
          onChange={(event) =>
            setSecondaryOptionIndex(parseInt(event.target.value))
          }
        >
          <Option disabled value="placeholder">
            ...
          </Option>
          {secondaryOptions.map((option, index) => (
            <Option key={index} value={index}>
              {t(
                `secondaryOptions.${primaryOptions[primaryOptionIndex].key}.${index}.option`
              )}
            </Option>
          ))}
        </OptionsSelect>
      ) : null}
    </Fragment>
  );
};

export default Options;
