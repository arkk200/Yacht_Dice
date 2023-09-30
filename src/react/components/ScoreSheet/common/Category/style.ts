import { color } from "@/styles/theme.styles";
import styled, { css } from "styled-components";

export const StyledCategory = styled.div`
  display: flex;
  height: 5%;
`;

export const Name = styled.p<{ types: "PRIMARY" | "SECONDARY" }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 50%;
  padding-left: min(1vw, 2vh);
  border: solid ${color.gray80};
  border-width: 0.1% 0.15%;
  font-size: min(1.75vw, 2.5vh);
  box-sizing: border-box;

  ${(props) =>
    props.types === "SECONDARY" &&
    css`
      &::after {
        position: absolute;
        top: 0;
        right: min(0.5vw, 1vh);
        content: "";
        width: min(0.25vw, 0.5vh);
        height: 100%;
        background-color: ${color.gray80};
      }
    `}
`;

export const ScoreBox = styled.p`
  width: 25%;
  border: solid ${color.gray80};
  border-width: min(0.1vw, 0.2vh) min(0.15vw, 0.3vh);
  box-sizing: border-box;
`;
