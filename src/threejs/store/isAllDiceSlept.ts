import { selector } from "recoil";
import { isSleptListAtom } from "./isSleptList";

export const isAllDiceSleptAtom = selector<boolean>({
  key: "isAllDiceSleptAtom",
  get: ({ get }) => {
    const isSleptList = get(isSleptListAtom);
    return isSleptList.every((isSlept) => isSlept);
  },
});
