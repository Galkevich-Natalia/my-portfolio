import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const Social = () => {
  return (
    <SocialList>
      <SocialItem>
        <SocialLink>
          <Icon
            iconId={"githubSocial"}
            width={"30px"}
            height={"30px"}
            viewBox={"0 0 30px 30px"}
          />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink>
          <Icon
            iconId={"twitter"}
            width={"30px"}
            height={"30px"}
            viewBox={"0 0 30px 30px"}
          />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink>
          <Icon
            iconId={"linkedin"}
            width={"30px"}
            height={"30px"}
            viewBox={"0 0 30px 30px"}
          />
        </SocialLink>
      </SocialItem>
    </SocialList>
  );
};

const SocialList = styled.ul`
  margin: 0;
  display: flex;
  gap: 30px;
`;

const SocialItem = styled.li`
  list-style-type: none;
`;

const SocialLink = styled.a``;
