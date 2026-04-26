import styled from "styled-components";

type ProjectPropsType = {
  title: string;
  text: string;
  src: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <Image src={props.src} alt="" />
      <ContentProject>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link href={"#"}>Live Preview</Link>
        <Link href={"#"}>View Code</Link>
      </ContentProject>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  background-color: #363636;
  max-width: 373px;
  width: 100%;
  text-align: center;
  border-radius: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`;

const ContentProject = styled.div``;

const Title = styled.h3`
  color: #ccc;
`;

const Text = styled.p`
  color: #ccc;
`;

const Link = styled.a`
  color: #fff;
`;
