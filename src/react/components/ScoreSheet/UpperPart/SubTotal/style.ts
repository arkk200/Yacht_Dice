import { color } from "@/styles/theme.styles";
import { styled } from "styled-components";

export const StyledSubTotal = styled.div`
  display: flex;
  height: 9%;
`;

export const UpperBox = styled.div`
  height: 44%;
  border-bottom: min(0.2vw, 0.4vh) dotted ${color.gray10};
  box-sizing: border-box;
`;

export const LowerBox = styled.div`
  height: 56%;
`;

export const SubTotalBox = styled.div`
  width: 50%;
  color: ${color.gray10};
  background-color: ${color.gray80};
  border: min(0.2vw, 0.4vh) solid ${color.gray80};
`;

export const SubTotalText = styled.p`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  padding-left: min(0.5vw, 1vh);
  font-size: min(1.35vw, 2.7vh);
  box-sizing: border-box;
`;

export const Plus35BonusText = styled.p`
  width: 100%;
  height: 100%;
  padding-left: min(0.5vw, 1vh);
  padding-top: 5%;
  font-size: min(1.6vw, 3.2vh);
`;

export const SubTotalScoreBox = styled.div`
  width: 25%;
  color: ${color.gray10};
  background-color: ${color.gray40};
  border: min(0.2vw, 0.4vh) solid ${color.gray80};
`;

export const SubTotalScoreText = styled.p`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding-right: min(0.5vw, 1vh);
  font-size: min(1.35vw, 2.7vh);
  box-sizing: border-box;
`;

export const Plus35Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: min(2.5vw, 5vh);
  font-weight: 900;
`;
