import styled from "styled-components";

type FlexWrapperPropsType = {
  display?: string;
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;

  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gap?: string;

  justifyItems?: string;
  alignItemsGrid?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  /* display: flex; */
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};

  grid-template-columns: ${(props) => props.gridTemplateColumns};
  grid-template-rows: ${(props) => props.gridTemplateRows};
  gap: ${(props) => props.gap};

  justify-items: ${(props) => props.justifyItems};
  align-items: ${(props) => props.alignItemsGrid};
`;
