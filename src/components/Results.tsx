import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const Results = () => {
  return (
    <React.Fragment>
      <H1>Usage</H1>
      <H1>Note</H1>
    </React.Fragment>
  );
};
export default Results;
