import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Social } from "../../components/social/Social";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper
          display={"flex"}
          justify={"space-between"}
          align={"center"}
        >
          <Logo />

          <FlexWrapper gap={"48px"}>
            <Menu menuItems={items} />
            <Social />
          </FlexWrapper>
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
