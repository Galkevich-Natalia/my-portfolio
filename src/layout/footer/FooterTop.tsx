import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";

export const FooterTop = () => {
  return (
    <StyledFooterTop>
      <Icon iconId={"logoFooter"} width={"97"} height={"59"} />
      <StyledContactsWrap>
        <Phone>+1 555 505 5050</Phone>
        <Email>info@designmodo.com</Email>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId={"githubSocial"}
                width={"30px"}
                height={"30px"}
                viewBox={"0 0 21px 21px"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId={"twitter"}
                width={"30px"}
                height={"30px"}
                viewBox={"0 0 21px 21px"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId={"linkedin"}
                width={"30px"}
                height={"30px"}
                viewBox={"0 0 21px 21px"}
              />
            </SocialLink>
          </SocialItem>
        </SocialList>
      </StyledContactsWrap>
    </StyledFooterTop>
  );
};

const StyledFooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledContactsWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Phone = styled.span`
  margin-right: 20px;
  color: #fff;
`;

const Email = styled.span`
  color: #fff;
`;

const SocialList = styled.ul`
  margin: 0;
  display: flex;
  gap: 30px;
`;

const SocialItem = styled.li`
  list-style-type: none;
`;

const SocialLink = styled.a``;
