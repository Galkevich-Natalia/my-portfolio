import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Social } from "../../components/social/Social";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { theme } from "../../styles/Theme";
import { MobileMenu } from "./mobileMenu/MobileMenu";

const items = ["About", "Tech Stack", "Projects", "Contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper
          display={"flex"}
          justify={"space-between"}
          align={"center"}
        >
          <Logo logoIconId={"logoHeader"} />

          {/* <FlexWrapper gap={"48px"}>
            <HeaderMenu menuItems={items} />
            <Social />
          </FlexWrapper> */}
          <NavMenuWrap>
            <HeaderMenu menuItems={items} />
            <Social />
          </NavMenuWrap>
          <MobileMenu menuItems={items} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 35px 0;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`;

const NavMenuWrap = styled.div`
  display: flex;
  gap: 48px;

  @media ${theme.media.tablet} {
    display: none;
  }
`;
