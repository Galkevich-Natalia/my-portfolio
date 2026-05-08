import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

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
      <ContentProject>
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
          <Link>
            <Icon
              iconId={"chain"}
              width={"20px"}
              height={"20px"}
              viewBox={"0 0 20 20"}
            ></Icon>
            Live Preview
          </Link>
          <Link>
            <Icon
              iconId={"githubCard"}
              width={"20px"}
              height={"20px"}
              viewBox={"0 0 20 20"}
            ></Icon>
            View Code
          </Link>
        </LinkWrap>
      </ContentProject>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  background-color: #363636;
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

const ContentProject = styled.div`
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
  color: #ccc;
  margin-bottom: 14px;
`;

const Text = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 1.4;
  color: #ccc;
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
  color: #ccc;
  white-space: pre-wrap;
`;

const StackName = styled.span`
  font-weight: 300;
  font-size: 14px;
  white-space: pre-wrap;
`;

const LinkWrap = styled.div`
  display: flex;
  gap: 48px;
  align-items: center;
  margin-top: auto;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: underline;
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;
