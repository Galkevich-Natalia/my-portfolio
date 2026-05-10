import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

export const TabMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledTabMenu>
      <MenuList>
        {props.menuItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link href="#">{item}</Link>
            </ListItem>
          );
        })}
      </MenuList>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav``;

const MenuList = styled.ul`
  display: flex;
  gap: 52px;

  justify-content: center;
`;

const ListItem = styled.li`
  position: relative;
  z-index: 0;
`;

const Link = styled.a`
  font-family: "DM Sana", sans-serif;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${theme.colors.fontContrast};
  padding: 10px;

  &:hover {
    &::before {
      height: 10px;
    }
  }

  &::before {
    content: "";
    display: inline-block;

    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
