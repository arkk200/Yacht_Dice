import { color } from "@/styles/theme.styles";
import { styled } from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  height: 17%;
`;

export const FirstPart = styled.div`
  width: 50%;
  flex-shrink: 0;
`;

export const TurnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 72%;
`;

export const Turn = styled.p`
  font-size: min(2.25vw, 4.5vh);
`;

export const TurnCount = styled.p`
  font-size: min(3vw, 6vh);
`;

export const Categories = styled.p`
  display: flex;
  align-items: center;
  height: 28%;
  padding-left: min(0.5vw, 1vh);
  font-size: min(2vw, 4vh);
  color: ${color.gray10};
  background-color: ${color.gray80};
`;

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  box-sizing: border-box;
  border: min(0.2vw, 0.4vh) solid ${color.gray80};
`;

export const ProfileImage = styled.img`
  max-width: min(5vw, 10vh);
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
`;
