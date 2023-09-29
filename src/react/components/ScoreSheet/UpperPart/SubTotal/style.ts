import { color } from "@/styles/theme.styles";
import { styled } from "styled-components";

export const StyledSubTotal = styled.div`
  display: flex;
  height: 9%;
`;

export const UpperBox = styled.div`
  height: 44%;
  border-bottom: 0.2vw dotted ${color.gray10};
  box-sizing: border-box;
`;

export const LowerBox = styled.div`
  height: 56%;
`;

export const SubTotalBox = styled.div`
  width: 50%;
  color: ${color.gray10};
  background-color: ${color.gray80};
  border: 0.2vw solid ${color.gray80};
`;

export const SubTotalText = styled.p`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  padding-left: 0.5vw;
  font-size: 1.35vw;
  box-sizing: border-box;
`;

export const Plus35BonusText = styled.p`
  width: 100%;
  height: 100%;
  padding-left: 0.5vw;
  padding-top: 5%;
  font-size: 1.6vw;
`;

export const SubTotalScoreBox = styled.div`
  width: 25%;
  color: ${color.gray10};
  background-color: ${color.gray40};
  border: 0.2vw solid ${color.gray80};
`;

export const SubTotalScoreText = styled.p`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding-right: 0.5vw;
  font-size: 1.35vw;
  box-sizing: border-box;
`;

export const Plus35Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 2.5vw;
  font-weight: 900;
`;
