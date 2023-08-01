import { atom, selector } from "recoil";

export type GameStatus = "주사위흔들기" | "주사위굴리기" | "선택하기";

export type Turn = "P1" | "P2";

export type DicesSlept = [boolean, boolean, boolean, boolean, boolean];

export type DicesNumber = [
  number | null,
  number | null,
  number | null,
  number | null,
  number | null
];

export const gameStatusState = atom<GameStatus>({
  key: "gameStatus",
  default: "주사위흔들기",
});

export const turnState = atom<Turn>({
  key: "turn",
  default: "P1",
});

export const dicesSleptState = atom<DicesSlept>({
  key: "diceSlept",
  default: [false, false, false, false, false],
});

export const isAllDicesSleptState = selector({
  key: "isAllDicesSlept",
  get: ({ get }) => {
    const diceSlept = get(dicesSleptState);
    return diceSlept.every((slept) => slept);
  },
});

export const dicesNumberState = atom<DicesNumber>({
  key: "dicesNumberState",
  default: [null, null, null, null, null],
});

export const dicesOrderState = selector({
  key: "dicesOrderState",
  get: ({ get }) => {
    const dicesNumber = get(dicesNumberState);
    const isAllDicesSlept = get(isAllDicesSleptState);
    if (!isAllDicesSlept) return;

    const sortedDicesNumber = [...dicesNumber].sort((a, b) => a! - b!);

    const sortedIndexes = sortedDicesNumber.map((pivotDiceNumber) => {
      const index = dicesNumber.findIndex(
        (diceNumber) => pivotDiceNumber === diceNumber
      );
      dicesNumber[index] = null;
      return index;
    });

    return sortedIndexes;
  },
});
