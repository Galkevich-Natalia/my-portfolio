import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { theme } from "../../../../styles/Theme";

type ProjectPropsType = {
  title: string;
  text: string;
  stackTitle: string;
  stackName: string;
  src: string;
  alt: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <Image src={props.src} alt={props.alt} />
      <Description>
        <ContentWrap>
          <Title>
            {props.title}
            {""}
          </Title>
          <Text>{props.text}</Text>
          <StackWrap>
            <StackTitle>{props.stackTitle}</StackTitle>
            <StackName>{props.stackName}</StackName>
          </StackWrap>
        </ContentWrap>

        <LinkWrap>
          <Link href={"#"}>
            <Icon
              iconId={"chain"}
              width={"20px"}
              height={"20px"}
              viewBox={"0 0 20 20"}
            ></Icon>
            Live Preview
          </Link>
          <Link href={"#"}>
            <Icon
              iconId={"githubCard"}
              width={"20px"}
              height={"20px"}
              viewBox={"0 0 20 20"}
            ></Icon>
            View Code
          </Link>
        </LinkWrap>
      </Description>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  background-color: ${theme.colors.secondaryBg};
  max-width: 373px;
  width: 100%;
  text-align: left;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 245px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`;

const Description = styled.div`
  padding: 25px 28px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ContentWrap = styled.div`
  flex-grow: 0;
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 28px;
  line-height: 93%;
  color: ${theme.colors.fontPrimary};
  margin-bottom: 14px;
`;

const Text = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 1.4;
  color: ${theme.colors.fontPrimary};
`;

const StackWrap = styled.div`
  margin: 10px 0px 20px 0;
  display: flex;
  align-items: baseline;
`;

const StackTitle = styled.h4`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: ${theme.colors.fontPrimary};
  white-space: pre-wrap;
`;

const StackName = styled.span`
  font-weight: 300;
  font-size: 14px;
  white-space: pre-wrap;
`;

const LinkWrap = styled.div`
  margin-top: auto;
`;

const Link = styled.a`
  color: ${theme.colors.fontContrast};
  text-decoration: underline;
  display: inline-flex;
  align-items: center;
  gap: 10px;

  & + & {
    margin-left: 48px;
  }

  &:hover {
    color: ${theme.colors.accent};
  }
`;
