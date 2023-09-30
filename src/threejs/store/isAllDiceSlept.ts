import { selector } from "recoil";
import { dicePipListAtom } from "./dicePipList";

export const isAllDiceSleptAtom = selector<boolean>({
  key: "isAllDiceSleptAtom",
  get: ({ get }) => {
    const dicePipList = get(dicePipListAtom);
    return dicePipList.every((dicePip) => dicePip);
  },
});
