import { atom } from "recoil";

export const countAtom = atom<number>({
  key: "count",
  default: 1,
});
