import { atom } from "recoil";

type Status =
  | "주사위 섞기"
  | "주사위 굴리기"
  | "주사위 눈금 보이기"
  | "남길 주사위 고르기"
  | "모든 주사위 고르기"
  | "카테고리 선택하기";

export const statusAtom = atom<Status>({
  key: "status",
  default: "주사위 섞기",
});
