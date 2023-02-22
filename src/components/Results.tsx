import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { OptionIndexStatus } from "../data/options";

const H1 = styled.h1``;
const ResultWrapper = styled.p`
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
const ResultLine = styled.code`
  display: block;
  font-weight: 500;
  word-break: break-all;
`;
const LineNumber = styled.span`
  font-family: inherit;
  font-weight: inherit;
  user-select: none;
  color: ${(props) => props.theme.themeColor};
`;

type ResultsProps = {
  primaryOptionIndex: number;
  secondaryOptionIndex: number;
};
const Results = (props: ResultsProps) => {
  const { primaryOptionIndex, secondaryOptionIndex } = props;
  const [primaryOptionKey, setPrimaryOptionKey] = useState<string>();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    let primaryOptionKey = undefined;
    if (
      primaryOptionIndex >= OptionIndexStatus.HasOption &&
      secondaryOptionIndex >= OptionIndexStatus.HasOption
    ) {
      primaryOptionKey = t(`primaryOptions.${primaryOptionIndex}.key`);
    }
    setPrimaryOptionKey(primaryOptionKey);
  }, [primaryOptionIndex, secondaryOptionIndex]);
  return (
    <Fragment>
      <H1>Usage</H1>
      <ResultWrapper>
        {i18n.exists(
          `secondaryOptions.${primaryOptionKey}.${secondaryOptionIndex}.usage`
        )
          ? t(
              `secondaryOptions.${primaryOptionKey}.${secondaryOptionIndex}.usage`
            )
              .split("\n")
              .map((line, index) => (
                <ResultLine key={index}>
                  <LineNumber>{index}&nbsp;&nbsp;</LineNumber>
                  {line}
                </ResultLine>
              ))
          : "　"}
      </ResultWrapper>
      {i18n.exists(
        `secondaryOptions.${primaryOptionKey}.${secondaryOptionIndex}.output`
      ) ? (
        <Fragment>
          <H1>Output</H1>
          <ResultWrapper>
            {t(
              `secondaryOptions.${primaryOptionKey}.${secondaryOptionIndex}.output`
            )
              .split("\n")
              .map((line, index) => (
                <ResultLine key={index}>
                  <LineNumber>{index}&nbsp;&nbsp;</LineNumber>
                  {line}
                </ResultLine>
              ))}
          </ResultWrapper>
        </Fragment>
      ) : null}
    </Fragment>
  );
};
export default Results;
