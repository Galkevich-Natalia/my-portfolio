import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { FooterMenu } from "./footerMenu/FooterMenu";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const FooterBottom = () => {
  return (
    <StyledFooterBottom>
      <FooterMenu menuItems={items} />
      <Copyright>Designed and built by Pavan MG with Love & Coffee</Copyright>
    </StyledFooterBottom>
  );
};
const StyledFooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled.small`
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  /* line-height: 144%;
  text-align: center; */
  color: ${theme.colors.fontSecondary};
`;
