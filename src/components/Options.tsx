import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const H2 = styled.h2`
  color: ${(props) => props.theme.themeColor};
`;
const P = styled.p``;

const Options = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <H2>{t("options.header")}</H2>
      <P>{t("options.description")}</P>
    </React.Fragment>
  );
};

export default Options;
