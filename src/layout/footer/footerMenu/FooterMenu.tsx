import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const FooterMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledFooterMenu>
      <MenuList>
        {props.menuItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link href="#">
                {item}
                <Mask>
                  <span>{item}</span>
                </Mask>
                <Mask>
                  <span>{item}</span>
                </Mask>
              </Link>
            </ListItem>
          );
        })}
      </MenuList>
    </StyledFooterMenu>
  );
};

const StyledFooterMenu = styled.nav``;

const MenuList = styled.ul`
  display: flex;
  gap: 52px;
`;

const Link = styled.a`
  font-family: "DM Sana", sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: transparent;
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: ${theme.colors.fontSecondary};

  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const ListItem = styled.li`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: #fff;

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`;
