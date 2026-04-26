import styled from "styled-components";

export const Menu = () => {
  return (
    <StyledMenu>
      <MenuList>
        <MenuItem>
          <a href="">Home</a>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">About</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">Tech Stack</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">Projects</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">Contact</MenuLink>
        </MenuItem>
      </MenuList>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav``;

const MenuList = styled.ul`
  display: flex;
  gap: 20px;
`;

const MenuItem = styled.li`
  list-style-type: none;
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: #fff;
`;
