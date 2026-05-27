import styled from "styled-components";
import { font } from "../../styles/Common";

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

export const SectionTitle = styled.h2`
  ${font({ weight: 700, color: "#ccc", Fmax: 48, Fmin: 40 })}
  text-align: center;
`;

export const SectionSubtitle = styled.p`
  ${font({ weight: 400, color: "#a7a7a7", Fmax: 32, Fmin: 24 })}
  text-align: center;
  display: inline-block;
  margin: 20px 0 45px 0;
`;
