import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {
  PrimaryOption,
  PrimaryOptionKey,
  SecondaryOption,
} from "../data/options";
import en from "../i18n/en";

const H2 = styled.h2`
  color: ${(props) => props.theme.themeColor};
`;
const OptionsSelect = styled.select`
  display: block;
`;
const Option = styled.option``;

const Options = () => {
  const { t } = useTranslation();
  const [primaryOption, setPrimaryOption] = React.useState<
    PrimaryOptionKey | undefined
  >();
  const [primaryOptions, setPrimaryOptions] = React.useState<
    Array<PrimaryOption>
  >(
    t("primaryOptions", {
      returnObjects: true,
    })
  );
  const [secondaryOptions, setSecondaryOptions] = React.useState<
    Array<SecondaryOption> | undefined
  >();
  useEffect(() => {
    let secondaryOptions;
    if (primaryOption) {
      secondaryOptions = t(`secondaryOptions.${primaryOption}`, {
        returnObjects: true,
      });
      if (!Array.isArray(secondaryOptions)) {
        secondaryOptions = undefined;
      }
    } else {
      secondaryOptions = undefined;
    }
    setSecondaryOptions(secondaryOptions as Array<SecondaryOption> | undefined);
  }, [primaryOption]);
  return (
    <React.Fragment>
      <H2>{t("options.header")}</H2>
      <OptionsSelect
        defaultValue="placeholder"
        onChange={(event) => {
          setSecondaryOptions(undefined);
          setPrimaryOption(event.target.value as PrimaryOptionKey);
        }}
      >
        {primaryOption ? null : (
          <Option disabled value="placeholder">
            {t("optionSelect.placeholder")}
          </Option>
        )}
        {primaryOptions.map((option, index) => (
          <Option key={index} value={option.key}>
            {t(`primaryOptions.${index}.option`)}
          </Option>
        ))}
      </OptionsSelect>
      {secondaryOptions ? (
        <OptionsSelect>
          {secondaryOptions.map((option, index) => (
            <Option key={index}>
              {t(`secondaryOptions.${primaryOption}.${index}.option`)}
            </Option>
          ))}
        </OptionsSelect>
      ) : null}
    </React.Fragment>
  );
};

export default Options;
