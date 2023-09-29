import { atom } from "recoil";

export const isAllDiceSleptAtom = atom<boolean>({
  key: "isAllDiceSleptAtom",
  default: false,
});
