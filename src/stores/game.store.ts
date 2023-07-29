import { atom } from "recoil";

export type GameStatus = "주사위흔들기" | "주사위굴리기" | "선택하기";

export type Turn = "P1" | "P2";

export const gameStatusState = atom<GameStatus>({
  key: "gameStatusState",
  default: "주사위흔들기",
});

export const turnState = atom<Turn>({
  key: "turnState",
  default: "P1",
});
