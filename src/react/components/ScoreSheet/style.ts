import { color } from "@/styles/theme.styles";
import { styled } from "styled-components";

export const ScoreSheetBackground = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 27.5%;
  height: 100%;
  padding: 0.5%;
  box-sizing: border-box;
  background-color: ${color.gray10};
`;

export const StyledScoreSheet = styled.div`
  flex: 1;
  border: min(0.2vw, 0.3vh) solid #a2a093;
  padding: 0.5%;
`;

export const BonusDesc = styled.p`
  display: flex;
  align-items: center;
  height: 3.5%;
  font-size: min(1.5vw, 3vh);
`;
