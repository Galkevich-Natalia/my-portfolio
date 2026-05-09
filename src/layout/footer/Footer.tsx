import styled from "styled-components";
import { FooterTop } from "./FooterTop";
import { FooterBottom } from "./FooterBottom";
import { Container } from "../../components/Container";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterTop />
        <FooterBottom />
      </Container>
    </StyledFooter>
  );
};
const StyledFooter = styled.footer`
  padding: 80px 0 60px 0;
`;
