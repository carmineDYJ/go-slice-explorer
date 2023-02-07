import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {
  OptionIndexStatus,
  PrimaryOption,
  SecondaryOption,
} from "../data/options";

const H1 = styled.h1``;
const Code = styled.code``;

type ResultsProps = {
  primaryOptionIndex: number;
  secondaryOptionIndex: number;
};
type Result = {
  usage: string;
  note: string;
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
        result = {
          usage: t(
            `secondaryOptions.${optionKey}.${secondaryOptionIndex}.usage`
          ),
          note: t(`secondaryOptions.${optionKey}.${secondaryOptionIndex}.note`),
        };
      } else if (secondaryOptionIndex === OptionIndexStatus.PrimaryNoSub) {
        result = {
          usage: t(`primaryOptions.${primaryOptionIndex}.usage`),
          note: t(`primaryOptions.${primaryOptionIndex}.note`),
        };
      }
    }
    setResult(result);
  }, [primaryOptionIndex, secondaryOptionIndex]);
  return (
    <Fragment>
      {result ? (
        <Fragment>
          <H1>Usage</H1>
          <Code>{result?.usage}</Code>
          <H1>Note</H1>
          <Code>{result?.note}</Code>
        </Fragment>
      ) : null}
    </Fragment>
  );
};
export default Results;
