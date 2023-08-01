import { atom, selector } from "recoil";

export type GameStatus = "주사위흔들기" | "주사위굴리기" | "선택하기";

export type Turn = "P1" | "P2";

export type DiceSlept = {
  0: boolean;
  1: boolean;
  2: boolean;
  3: boolean;
  4: boolean;
  length: 5;
};

export const gameStatusState = atom<GameStatus>({
  key: "gameStatus",
  default: "주사위흔들기",
});

export const turnState = atom<Turn>({
  key: "turn",
  default: "P1",
});

export const diceSleptState = atom<DiceSlept>({
  key: "diceSlept",
  default: {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    length: 5,
  },
});

export const isAllDicesSleptState = selector({
  key: "isAllDicesSlept",
  get: ({ get }) => {
    const diceSlept = get(diceSleptState);
    return Array.from(diceSlept).every((slept) => slept);
  },
});
