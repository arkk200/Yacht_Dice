import styled, { css } from "styled-components";

export const StyledSelectSign = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export const SelectSignCorner = styled.div<{ position: Position }>`
  position: absolute;
  width: 25px;
  height: 25px;
  ${(props) => {
    switch (props.position) {
      case "top-left":
        return css`
          top: 0;
          left: 0;
        `;
      case "top-right":
        return css`
          top: 0;
          right: 0;
        `;
      case "bottom-left":
        return css`
          bottom: 0;
          left: 0;
        `;
      case "bottom-right":
        return css`
          bottom: 0;
          right: 0;
        `;
    }
  }}
`;
