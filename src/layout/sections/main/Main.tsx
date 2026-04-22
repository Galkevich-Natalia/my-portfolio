import styled from "styled-components";
import photo from "./../../../assets/images/photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper display={"flex"} justify={"space-around"} align={"center"}>
        <div>
          <span>Hi everybody!</span>
          <Name>I'm Natalia Galkevich</Name>
          <MainTitle>A web developer</MainTitle>
        </div>

        <Photo src={photo} alt="" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #fcdc67;
`;

const Photo = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
`;

const MainTitle = styled.h1``;

const Name = styled.h2``;
