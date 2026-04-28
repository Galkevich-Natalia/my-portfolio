import styled from "styled-components";
import { FooterTop } from "./FooterTop";
import { FooterBottom } from "./FooterBottom";

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterTop />
      <FooterBottom />
    </StyledFooter>
  );
};
const StyledFooter = styled.footer`
  min-height: 20vh;
`;
