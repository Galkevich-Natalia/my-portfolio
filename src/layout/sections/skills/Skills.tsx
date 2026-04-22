import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { SectionComTitle } from "../../../components/sectionComTitle/SectionComTitle";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionComTitle
        title={"My Tech Stack"}
        subtitle={"Technologies I’ve been working with recently"}
      />

      <FlexWrapper
        display={"grid"}
        gridTemplateColumns={"repeat(6, 1fr)"}
        gridTemplateRows={"repeat(2, 1fr)"}
        gap={"10px"}
        justifyItems={"center"}
        alignItemsGrid={"center"}
      >
        <Icon iconId={"html"} />
        <Icon iconId={"css"} />
        <Icon iconId={"js"} />
        <Icon iconId={"react"} />
        <Icon iconId={"redux"} />
        <Icon iconId={"bootstrap"} />
        <Icon iconId={"tailwind"} />
        <Icon iconId={"saas"} />
        <Icon iconId={"git"} />
        <Icon iconId={"greensock"} />
        <Icon iconId={"vscode"} />
        <Icon iconId={"githubSkill"} />
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #000000;
  min-height: 100vh;
  text-align: center;
`;
