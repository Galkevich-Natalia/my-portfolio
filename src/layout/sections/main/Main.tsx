import styled from "styled-components";
import photo from "./../../../assets/images/photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import abstract from "../../../assets/images/Abstract.png";
import { theme } from "../../../styles/Theme";

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
    background-color: ${theme.colors.accent};
    position: absolute;
    bottom: 5px;
    z-index: -1;
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 350px;

  &::before {
    content: "";
    position: absolute;
    width: 628px;
    height: 628px;
    background-image: url(${abstract});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
