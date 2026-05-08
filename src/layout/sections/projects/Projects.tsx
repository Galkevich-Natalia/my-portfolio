import styled from "styled-components";
import { SectionComTitle } from "../../../components/sectionComTitle/SectionComTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";

import project1Img from "./../../../assets/images/project_1.webp";
import project2Img from "./../../../assets/images/project_2.webp";
import project3Img from "./../../../assets/images/project_3.webp";
import project4Img from "./../../../assets/images/project_4.webp";
import project5Img from "./../../../assets/images/project_5.webp";
import project6Img from "./../../../assets/images/project_6.webp";
import { Container } from "../../../components/Container";

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionComTitle
          title={"Projects"}
          subtitle={"Things I’ve built so far"}
        />
        <FlexWrapper
          display={"grid"}
          gridTemplateColumns={"repeat(auto-fit, minmax(360px, 1fr))"}
          gap={"65px 48px"}
          paddingTop={"60px"}
        >
          <Project
            src={project1Img}
            alt={"Project_1"}
            title={"Project Tile goes here"}
            text={
              "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
            }
            stackTitle={"Tech stack: "}
            stackName={"HTML, JavaScript, SASS, React"}
          />

          <Project
            src={project2Img}
            alt={"Project_2"}
            title={"Project Tile goes here"}
            text={
              "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
            }
            stackTitle={"Tech stack: "}
            stackName={"HTML, JavaScript, SASS, React"}
          />

          <Project
            src={project3Img}
            alt={"Project_3"}
            title={"Project Tile goes here"}
            text={
              "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
            }
            stackTitle={"Tech stack: "}
            stackName={"HTML, JavaScript, SASS, React"}
          />

          <Project
            src={project4Img}
            alt={"Project_4"}
            title={"Project Tile goes here"}
            text={
              "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
            }
            stackTitle={"Tech stack: "}
            stackName={"HTML, JavaScript, SASS, React"}
          />

          <Project
            src={project5Img}
            alt={"Project_5"}
            title={"Project Tile goes here"}
            text={
              "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
            }
            stackTitle={"Tech stack: "}
            stackName={"HTML, JavaScript, SASS, React"}
          />

          <Project
            src={project6Img}
            alt={"Project_6"}
            title={"Project Tile goes here"}
            text={
              "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
            }
            stackTitle={"Tech stack: "}
            stackName={"HTML, JavaScript, SASS, React"}
          />
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section``;
