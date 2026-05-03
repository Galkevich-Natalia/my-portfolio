import styled from "styled-components";

type SquarePropsType = {
  rotate: string;
};

export const Square = (props: SquarePropsType) => {
  return <SquareStyle rotate={props.rotate} />;
};

const SquareStyle = styled.div<SquarePropsType>`
  position: absolute;

  width: 444px;
  height: 444px;

  border: 1px solid #5f5f5f;
  background: transparent;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%) rotate(${(props) => props.rotate});

  z-index: 1;

  -webkit-mask-image: linear-gradient(135deg, black 50%, transparent 75%);

  mask-image: linear-gradient(135deg, black 50%, transparent 75%);
`;
