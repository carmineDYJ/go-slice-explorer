import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";

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
  useEffect(() => {}, [primaryOptionIndex, secondaryOptionIndex]);
  return (
    <Fragment>
      <H1>Usage</H1>
      <Code>{result?.usage}</Code>
      <H1>Note</H1>
      <Code>{result?.note}</Code>
    </Fragment>
  );
};
export default Results;
