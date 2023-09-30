import { atom } from "recoil";

export const isSleptListAtom = atom({
  key: "isSleptListAtom",
  default: Array(5).fill(false),
});
