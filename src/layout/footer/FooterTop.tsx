import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { Social } from "../../components/social/Social";
import { theme } from "../../styles/Theme";

export const FooterTop = () => {
  return (
    <StyledFooterTop>
      <Icon
        iconId={"logoFooter"}
        width={"97"}
        height={"59"}
        viewBox={"0 0 97 59"}
      />
      <StyledContacts>
        <StyledContactsWrap>
          <Phone href="tel:+91 12345 09876">+91 12345 09876</Phone>
          <Email href="info@example.com">info@example.com</Email>
        </StyledContactsWrap>
        <Social />
      </StyledContacts>
    </StyledFooterTop>
  );
};

const StyledFooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 88px;
`;

const StyledContacts = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
  /* padding-top: 12px */
`;

const StyledContactsWrap = styled.div`
  display: flex;
  gap: 33px;
`;

const Phone = styled.a`
  margin-right: 20px;
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  /* line-height: 144%; */
  color: ${theme.colors.fontSecondary};
`;

const Email = styled.a`
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  /* line-height: 144%; */
  color: ${theme.colors.fontSecondary};
`;
