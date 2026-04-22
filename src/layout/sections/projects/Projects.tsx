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

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionComTitle
        title={"Projects"}
        subtitle={"Things I’ve built so far"}
      />
      <FlexWrapper
        display={"grid"}
        gridTemplateColumns={"repeat(3, 1fr)"}
        gridTemplateRows={"repeat(2, 1fr)"}
        gap={"40px"}
      >
        <Project
          src={project1Img}
          title={"Project 1"}
          text={
            "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          }
        />

        <Project
          src={project2Img}
          title={"Project 2"}
          text={
            "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          }
        />

        <Project
          src={project3Img}
          title={"Project 3"}
          text={
            "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          }
        />

        <Project
          src={project4Img}
          title={"Project 4"}
          text={
            "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          }
        />

        <Project
          src={project5Img}
          title={"Project 5"}
          text={
            "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          }
        />

        <Project
          src={project6Img}
          title={"Project 6"}
          text={
            "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          }
        />
      </FlexWrapper>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  min-height: 100vh;
  background-color: #223492;
`;
