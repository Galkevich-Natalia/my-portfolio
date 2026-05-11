import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/Theme";

export const Social = () => {
  return (
    <SocialList>
      <SocialItem>
        <SocialLink>
          <Icon
            iconId={"githubSocial"}
            width={"30px"}
            height={"30px"}
            viewBox={"0 0 30 30"}
          />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink>
          <Icon
            iconId={"twitter"}
            width={"30px"}
            height={"30px"}
            viewBox={"0 0 30 30"}
          />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink>
          <Icon
            iconId={"linkedin"}
            width={"30px"}
            height={"30px"}
            viewBox={"0 0 30 30"}
          />
        </SocialLink>
      </SocialItem>
    </SocialList>
  );
};

const SocialList = styled.ul`
  display: flex;
  gap: 20px;

  @media ${theme.media.tablet} {
    flex-direction: row;
  }
`;

const SocialItem = styled.li`
  list-style-type: none;
`;

const SocialLink = styled.a`
  color: ${theme.colors.fontSecondary};
  display: inline-block;

  &:hover {
    color: ${theme.colors.accent};
    transform: translateY(-4px);
  }
`;
