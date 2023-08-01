import { atom, selector } from "recoil";

export type GameStatus = "주사위흔들기" | "주사위굴리기" | "선택하기";

export type Turn = "P1" | "P2";

export type DiceSlept = [boolean, boolean, boolean, boolean, boolean];

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
  default: [false, false, false, false, false],
});

export const isAllDicesSleptState = selector({
  key: "isAllDicesSlept",
  get: ({ get }) => {
    const diceSlept = get(diceSleptState);
    return diceSlept.every((slept) => slept);
  },
});
