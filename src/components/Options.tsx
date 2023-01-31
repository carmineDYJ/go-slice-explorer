import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Div = styled.div`
  color: ${(props) => props.theme.themeColor};
`;

const Options = () => {
  const { t } = useTranslation();
  return <Div>{t("options")}</Div>;
};

export default Options;
