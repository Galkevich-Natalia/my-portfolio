// import styled from "styled-components";

import styled from "styled-components";
import { SectionSubtitle } from "../SectionSubtitle";
import { SectionTitle } from "../SectionTitle";

type SectionComTitlePropsType = {
  title: string;
  subtitle: string;
};

export const SectionComTitle = (props: SectionComTitlePropsType) => {
  return (
    <SectionComTitleWrap>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionSubtitle>{props.subtitle}</SectionSubtitle>
    </SectionComTitleWrap>
  );
};

const SectionComTitleWrap = styled.div`
  text-align: center;
`;
