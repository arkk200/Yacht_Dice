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

export const diceSleepListState = atom<DicesSlept>({
  key: "diceSlept",
  default: [false, false, false, false, false],
});

export const isAllDicesSleepState = selector({
  key: "isAllDicesSlept",
  get: ({ get }) => {
    const diceSlept = get(diceSleepListState);
    return diceSlept.every((slept) => slept);
  },
});

export const diceNumberListState = atom<DicesNumber>({
  key: "dicesNumberState",
  default: [null, null, null, null, null],
});

export const sortedDiceOrderListState = selector({
  key: "dicesOrderState",
  get: ({ get }) => {
    const diceNumberList = get(diceNumberListState);
    if (diceNumberList.some((diceNumber) => diceNumber === null)) return [];

    const cloneDiceNumberList = [...diceNumberList];
    const sortedDiceNumberList = [...cloneDiceNumberList].sort(
      (a, b) => a! - b!
    );

    const sortedIndexList = sortedDiceNumberList.map((pivotDiceNumber) => {
      const index = cloneDiceNumberList.findIndex(
        (diceNumber) => pivotDiceNumber === diceNumber
      );
      cloneDiceNumberList[index] = null;
      return index;
    });

    return sortedIndexList;
  },
});
