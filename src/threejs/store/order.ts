import { selector } from "recoil";
import { dicePipListAtom } from "./dicePipList";
import { isAllDiceSleptAtom } from "./isAllDiceSlept";

export const orderListAtom = selector({
  key: "orderListAtom",
  get: ({ get }) => {
    const isAllDiceSlept = get(isAllDiceSleptAtom);
    if (isAllDiceSlept) {
      const dicePipList = get(dicePipListAtom);
      const orderList = Object.entries(dicePipList)
        .sort((a, b) => a[1] - b[1])
        .map((item) => +item[0]);
      return orderList;
    }
  },
});
