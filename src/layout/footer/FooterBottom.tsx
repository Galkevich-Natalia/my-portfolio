import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";

export const FooterBottom = () => {
  return (
    <StyledFooterBottom>
      <Menu />
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
`;
