import { color } from "@/styles/theme.style";
import { styled } from "styled-components";

export const Container = styled.div`
  width: 32vw;
  height: 100%;
  flex-shrink: 0;
`;

export const ScoreSheetBackground = styled.div`
  display: flex;
  width: 27.5vw;
  height: 100%;
  padding: 0.5vw;
  box-sizing: border-box;
  background-color: ${color.gray10};
`;

export const StyledScoreSheet = styled.div`
  flex: 1;
  border: 0.2vw solid #a2a093;
  padding: 0.5vw;
`;

export const BonusDesc = styled.p`
  display: flex;
  align-items: center;
  height: 3.5%;
  font-size: 1.5vw;
`;
