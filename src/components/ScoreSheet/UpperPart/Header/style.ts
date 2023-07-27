import { styled } from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  background-color: red;
  height: 17%;
`;

export const FirstPart = styled.div`
  width: 50%;
  flex-shrink: 0;
`;

export const TurnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 72%;
  background-color: skyblue;
`;

export const Turn = styled.p`
  font-size: 2.25vw;
`;

export const TurnCount = styled.p`
  font-size: 3vw;
`;

export const Categories = styled.p`
  display: flex;
  align-items: center;
  height: 28%;
  padding-left: 0.5vw;
  font-size: 2vw;
`;
