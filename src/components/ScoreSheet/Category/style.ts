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
  border: 0.1vw solid ${color.gray80};
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
        width: 0.2vw;
        height: 100%;
        background-color: ${color.gray80};
      }
    `}
`;

export const ScoreBox = styled.p`
  width: 25%;
  border: 0.1vw solid ${color.gray80};
  box-sizing: border-box;
`;
