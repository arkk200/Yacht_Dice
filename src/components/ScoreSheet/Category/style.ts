import { color } from "@/styles/theme.style";
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
  padding-left: 1vw;
  border: solid ${color.gray80};
  border-width: 0.1vw 0.15vw;
  font-size: 1.75vw;
  box-sizing: border-box;

  ${(props) =>
    props.types === "SECONDARY" &&
    css`
      &::after {
        position: absolute;
        top: 0;
        right: 0.5vw;
        content: "";
        width: 0.25vw;
        height: 100%;
        background-color: ${color.gray80};
      }
    `}
`;

export const ScoreBox = styled.p`
  width: 25%;
  border: solid ${color.gray80};
  border-width: 0.1vw 0.15vw;
  box-sizing: border-box;
`;
