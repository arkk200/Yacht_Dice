import { color } from "@/styles/theme.styles";
import { styled } from "styled-components";

export const StyledTotal = styled.div`
  display: flex;
  height: 8%;
`;

export const TotalText = styled.p`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  padding-left: min(0.5vw, 1vh);
  color: ${color.gray10};
  background-color: ${color.gray80};
  border: min(0.2vw, 0.5vh) solid ${color.gray80};
  font-size: min(1.75vw, 3.5vh);
  box-sizing: border-box;
`;

export const TotalScoreText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
  border: min(0.2vw, 0.5vh) solid ${color.gray80};
  font-size: min(2.25vw, 4.5vh);
  box-sizing: border-box;
`;
