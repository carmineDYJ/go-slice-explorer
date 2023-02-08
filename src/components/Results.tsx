import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {
  OptionIndexStatus,
  PrimaryOption,
  SecondaryOption,
} from "../data/options";

const H1 = styled.h1``;
const Code = styled.code`
  display: block;
  position: relative;
  width: 100%;
  padding: 28px 12px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.resultsBackgroundColor};
  color: ${(props) => props.theme.resultsFontColor};
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: ${(props) => props.theme.resultsBannerColor};
  }
`;

type ResultsProps = {
  primaryOptionIndex: number;
  secondaryOptionIndex: number;
};
type Result = {
  usage: string;
  note: string | undefined;
};
const Results = (props: ResultsProps) => {
  const { primaryOptionIndex, secondaryOptionIndex } = props;
  const [result, setResult] = useState<Result | undefined>(undefined);
  const { t } = useTranslation();
  useEffect(() => {
    let result: Result | undefined = undefined;
    if (primaryOptionIndex >= OptionIndexStatus.HasOption) {
      if (secondaryOptionIndex >= OptionIndexStatus.HasOption) {
        const optionKey = t(`primaryOptions.${primaryOptionIndex}.key`);
        const option = t(
          `secondaryOptions.${optionKey}.${secondaryOptionIndex}`,
          {
            returnObjects: true,
          }
        ) as Result;
        result = {
          usage: option.usage,
          note: option.note,
        };
      } else if (secondaryOptionIndex === OptionIndexStatus.PrimaryNoSub) {
        const option = t(`primaryOptions.${primaryOptionIndex}`, {
          returnObjects: true,
        }) as Result;
        result = {
          usage: option.usage,
          note: option.note,
        };
      }
    }
    setResult(result);
  }, [primaryOptionIndex, secondaryOptionIndex]);
  return (
    <Fragment>
      <H1>Usage</H1>
      <Code>{result?.usage ?? t("placeholder")}</Code>
      {result?.note ? (
        <Fragment>
          <H1>Note</H1>
          <Code>{result?.note}</Code>
        </Fragment>
      ) : null}
    </Fragment>
  );
};
export default Results;
