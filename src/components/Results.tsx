import { Fragment, useEffect, useState } from "react";
import TypeIt from "typeit-react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { OptionIndexStatus } from "../data/options";
import { getThemeValue } from "../styles/theme";

const H1 = styled.h1``;
const ResultWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  padding: 28px 12px;
  border-radius: 6px;
  background-color: ${(props) =>
    getThemeValue(props.theme, "resultsBackgroundColor")};
  color: ${(props) => getThemeValue(props.theme, "resultsFontColor")};
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: ${(props) =>
      getThemeValue(props.theme, "resultsBannerColor")};
  }
`;
const ResultLine = styled.code`
  display: block;
  font-weight: 500;
  word-break: break-all;
  color: ${(props) => getThemeValue(props.theme, "resultsFontColor")};
`;
const LineNumber = styled.span`
  font-family: inherit;
  font-weight: inherit;
  white-space: pre;
  user-select: none;
  color: ${(props) => getThemeValue(props.theme, "themeColor")};
`;

const formatLineNumber = (lines: string[], lineNumber: number) => {
  if (lines.length > 10) {
    if (lineNumber < 10) {
      return " " + lineNumber.toString();
    } else {
      return lineNumber.toString();
    }
  } else {
    return lineNumber.toString();
  }
};
type ResultsProps = {
  primaryOptionIndex: number;
  secondaryOptionIndex: number;
};
const Results = (props: ResultsProps) => {
  const { primaryOptionIndex, secondaryOptionIndex } = props;
  const { t, i18n } = useTranslation();
  const [usageLines, setUsageLines] = useState<string[]>();
  const [outputLines, setOutputLines] = useState<string[]>();
  useEffect(() => {
    let usageLines = undefined;
    let outputLines = undefined;
    setUsageLines(usageLines);
    setOutputLines(outputLines);
    if (
      primaryOptionIndex >= OptionIndexStatus.HasOption &&
      secondaryOptionIndex >= OptionIndexStatus.HasOption
    ) {
      const primaryOptionKey = t(`primaryOptions.${primaryOptionIndex}.key`);
      usageLines = t(
        `secondaryOptions.${primaryOptionKey}.${secondaryOptionIndex}.usage`
      ).split("\n");
      outputLines = t(
        `secondaryOptions.${primaryOptionKey}.${secondaryOptionIndex}.output`
      ).split("\n");
    }
    setUsageLines(usageLines);
    setOutputLines(outputLines);
  }, [primaryOptionIndex, secondaryOptionIndex, i18n.language]);
  return (
    <Fragment>
      <H1>Usage</H1>
      <ResultWrapper>
        {usageLines?.map((line, index) => (
          <ResultLine key={index}>
            <LineNumber>
              {formatLineNumber(usageLines, index)}&nbsp;&nbsp;
            </LineNumber>
            <TypeIt
              key={line.toString()}
              options={{
                strings: line,
                speed: 50,
                waitUntilVisible: true,
                cursor: false,
              }}
            />
          </ResultLine>
        )) ?? "　"}
      </ResultWrapper>
      <H1>Output</H1>
      <ResultWrapper>
        {outputLines?.map((line, index) => (
          <ResultLine key={index}>
            <LineNumber>{index}&nbsp;&nbsp;</LineNumber>
            <TypeIt
              key={line}
              options={{
                strings: line,
                speed: 50,
                waitUntilVisible: true,
                cursor: false,
              }}
            />
          </ResultLine>
        )) ?? "　"}
      </ResultWrapper>
    </Fragment>
  );
};
export default Results;
