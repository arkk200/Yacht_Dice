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
  padding-left: 0.5vw;
  color: ${color.gray10};
  background-color: ${color.gray80};
  border: 0.2vw solid ${color.gray80};
  font-size: 1.75vw;
  box-sizing: border-box;
`;

export const TotalScoreText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
  border: 0.2vw solid ${color.gray80};
  font-size: 2.25vw;
  box-sizing: border-box;
`;
