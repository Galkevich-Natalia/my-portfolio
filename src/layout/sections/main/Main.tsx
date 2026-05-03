import styled from "styled-components";
import photo from "./../../../assets/images/photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Square } from "../../../components/Square";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper
          display={"flex"}
          justify={"space-between"}
          align={"center"}
        >
          <MainTitle>
            <Line>Hi everybody!</Line>
            <Line>My name is</Line>
            <NameLine>Natalia Galkevich</NameLine>
            <Line>A web developer</Line>
          </MainTitle>
          <PhotoWrapper>
            <Photo src={photo} alt="personal_photo" />
            <Square rotate={"-105deg"} />
            <Square rotate={"-120deg"} />
            <Square rotate={"-135deg"} />
            <Square rotate={"-150deg"} />
            <Square rotate={"-165deg"} />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
  padding: 315px 0 205px 0;
`;

const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 58px;
  letter-spacing: -0.02em;
  color: #d9d9d9;
`;

const Line = styled.span`
  display: block;
`;

const NameLine = styled(Line)`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 100%;
    height: 20px;
    background-color: #4a3aff;
    position: absolute;
    bottom: 5px;
    z-index: -1;
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 2;
`;
