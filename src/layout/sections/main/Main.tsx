import styled from "styled-components";
import photo from "./../../../assets/images/photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper display={"flex"} justify={"space-around"} align={"center"}>
        <div>
          <Greeting>Hi everybody!</Greeting>
          <Name>I'm Natalia Galkevich</Name>
          <MainTitle>A web developer</MainTitle>
        </div>

        <Photo src={photo} alt="" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
`;

const Photo = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
`;

const Greeting = styled.span`
  color: #fff;
`;

const MainTitle = styled.h1`
  color: #fff;
`;

const Name = styled.h2`
  color: #fff;
`;
