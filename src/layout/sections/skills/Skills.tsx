import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { SectionComTitle } from "../../../components/sectionComTitle/SectionComTitle";
import { Container } from "../../../components/Container";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionComTitle
          title={"My Tech Stack"}
          subtitle={"Technologies I’ve been working with recently"}
        />

        <FlexWrapper
          display={"grid"}
          gridTemplateColumns={"repeat(auto-fit, minmax(180px, 1fr))"}
          gap={"65px 20px"}
          justifyItems={"center"}
          alignItemsGrid={"center"}
          paddingTop={"85px"}
        >
          <Icon
            iconId={"html"}
            width={"120"}
            height={"120"}
            viewBox={"0 0 120 120"}
          />
          <Icon
            iconId={"css"}
            width={"120"}
            height={"120"}
            viewBox={"0 0 120 120"}
          />
          <Icon
            iconId={"js"}
            width={"120"}
            height={"120"}
            viewBox={"0 0 120 120"}
          />
          <Icon
            iconId={"react"}
            width={"113"}
            height={"100"}
            viewBox={"0 0 113 100"}
          />
          <Icon
            iconId={"redux"}
            width={"105"}
            height={"100"}
            viewBox={"0 0 105 100"}
          />
          <Icon
            iconId={"bootstrap"}
            width={"88"}
            height={"88"}
            viewBox={"0 0 88 88"}
          />
          <Icon
            iconId={"tailwind"}
            width={"131"}
            height={"131"}
            viewBox={"0 0 131 131"}
          />
          <Icon
            iconId={"saas"}
            width={"117"}
            height={"87"}
            viewBox={"0 0 117 87"}
          />
          <Icon
            iconId={"git"}
            width={"105"}
            height={"105"}
            viewBox={"0 0 105 105"}
          />
          <Icon
            iconId={"greensock"}
            width={"120"}
            height={"120"}
            viewBox={"0 0 120 120"}
          />
          <Icon
            iconId={"vscode"}
            width={"112"}
            height={"112"}
            viewBox={"0 0 112 112"}
          />
          <Icon
            iconId={"githubSkill"}
            width={"88"}
            height={"88"}
            viewBox={"0 0 88 88"}
          />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  text-align: center;
`;
