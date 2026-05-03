import styled from "styled-components";

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
  font-weight: 700;
  font-size: 48px;
  text-align: center;
  color: #ccc;
`;

export const SectionSubtitle = styled.span`
  font-weight: 400;
  font-size: 32px;
  text-align: center;
  color: #a7a7a7;
  display: inline-block;
  margin: 20px 0 45px 0;
`;
