import { Fragment, useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import styled from "styled-components";
import {
  OptionIndexStatus,
  PrimaryOption,
  SecondaryOption,
} from "../data/options";

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
type Result = {
  usage: string;
  note: string | undefined;
};
const Results = (props: ResultsProps) => {
  const { primaryOptionIndex, secondaryOptionIndex } = props;
  const [usageExists, setUsageExists] = useState<boolean>(false);
  const [noteExists, setNoteExists] = useState<boolean>(false);
  const [primaryOptionKey, setPrimaryOptionKey] = useState<string>();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    let usageExists = false;
    let noteExists = false;
    let primaryOptionKey = undefined;
    if (primaryOptionIndex >= OptionIndexStatus.HasOption) {
      if (secondaryOptionIndex >= OptionIndexStatus.HasOption) {
        usageExists = true;
        primaryOptionKey = t(`primaryOptions.${primaryOptionIndex}.key`);
        noteExists = i18n.exists(
          `secondaryOptions.${primaryOptionKey}.${secondaryOptionIndex}.note`
        );
      }
    }
    setUsageExists(usageExists);
    setNoteExists(noteExists);
    setPrimaryOptionKey(primaryOptionKey);
  }, [primaryOptionIndex, secondaryOptionIndex]);
  return (
    <Fragment>
      <H1>Usage</H1>
      <ResultWrapper>
        {usageExists
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
      {noteExists ? (
        <Fragment>
          <H1>Note</H1>
          <ResultWrapper>
            {t(
              `secondaryOptions.${primaryOptionKey}.${secondaryOptionIndex}.note`
            )}
          </ResultWrapper>
        </Fragment>
      ) : null}
    </Fragment>
  );
};
export default Results;
