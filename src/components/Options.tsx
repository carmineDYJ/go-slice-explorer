import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PrimaryOption, SecondaryOption } from "../data/options";

const H2 = styled.h2`
  color: ${(props) => props.theme.themeColor};
`;
const OptionsSelect = styled.select`
  display: block;
`;
const Option = styled.option``;
type OptionsProps = {
  primaryOptionIndex: number;
  setPrimaryOptionIndex: Dispatch<SetStateAction<number>>;
};
const Options = (props: OptionsProps) => {
  const { t } = useTranslation();
  const { primaryOptionIndex, setPrimaryOptionIndex } = props;
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
          setSecondaryOptions(undefined);
          setPrimaryOptionIndex(parseInt(event.target.value));
        }}
      >
        {primaryOptionIndex >= 0 ? null : (
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
        <OptionsSelect>
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
