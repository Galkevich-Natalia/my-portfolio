import styled from "styled-components";
import photo from "./../../../assets/images/photo.webp";
// import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import abstract from "../../../assets/images/Abstract.png";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        {/* <FlexWrapper
          display={"flex"}
          justify={"space-between"}
          align={"center"}
          wrap={"wrap"}
        > */}

        <MainWrapper>
          <MainTitle>
            <Line>Hi everybody!</Line>
            <Line>My name is</Line>
            <NameLine>Natali Galkevich</NameLine>
            <Line>A web developer</Line>
          </MainTitle>
          <PhotoWrapper>
            <Photo src={photo} alt="personal_photo" />
          </PhotoWrapper>
        </MainWrapper>

        {/* </FlexWrapper> */}
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  /* min-height: 100vh; */
  display: flex;
  padding: 315px 0 205px 0;
  /* padding-top: 315px; */
  overflow-x: clip;

  @media ${theme.media.tablet} {
    padding: 218px 0 205px 0;
  }

  @media ${theme.media.mobile} {
    padding: 50px 0;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media ${theme.media.tablet} {
    justify-content: center;
    flex-direction: column-reverse;
  }

  @media ${theme.media.mobile} {
    padding: 90px 0 50px 0;
  }
`;

const MainTitle = styled.h1`
  ${font({ weight: 700, Fmax: 58, Fmin: 36, color: "#d9d9d9" })}
  letter-spacing: -0.02em;

  @media ${theme.media.tablet} {
    text-align: center;
  }
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
  margin-left: 22px;

  @media ${theme.media.tablet} {
    margin: 0 0 100px 0;
  }

  @media ${theme.media.mobile} {
    width: 300px;
    height: 300px;
    margin: 0 0 50px 0;
  }

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

    @media ${theme.media.mobile} {
      width: 528px;
      height: 528px;
    }
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
