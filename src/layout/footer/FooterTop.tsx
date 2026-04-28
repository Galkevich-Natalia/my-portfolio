import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { Social } from "../../components/social/Social";

export const FooterTop = () => {
  return (
    <StyledFooterTop>
      <Icon
        iconId={"logoFooter"}
        width={"97"}
        height={"59"}
        viewBox={"0 0 97px 59px"}
      />
      <StyledContactsWrap>
        <Phone>+1 555 505 5050</Phone>
        <Email>info@designmodo.com</Email>
        <Social />
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
