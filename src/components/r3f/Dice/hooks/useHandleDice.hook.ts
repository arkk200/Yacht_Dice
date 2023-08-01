import {
  DicesNumber,
  DicesSlept,
  dicesNumberState,
  dicesSleptState,
  gameStatusState,
} from "@/stores/game.store";
import { RapierRigidBody } from "@react-three/rapier";
import { RefObject } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import useGetDiceNumber from "./useGetDiceNumber";

const useHandleDice = (
  diceRigidBodyRef: RefObject<RapierRigidBody>,
  id: number
) => {
  const gameStatus = useRecoilValue(gameStatusState);
  const setDicesSlept = useSetRecoilState(dicesSleptState);
  const setDicesNumber = useSetRecoilState(dicesNumberState);

  const { getDiceNumber } = useGetDiceNumber(diceRigidBodyRef);

  const handleDiceSlept = () => {
    if (gameStatus !== "주사위굴리기") return;
    setDicesSlept(
      (prev) =>
        [...prev.slice(0, id), true, ...prev.slice(id + 1)] as DicesSlept
    );
    setDicesNumber(
      (prev) =>
        [
          ...prev.slice(0, id),
          getDiceNumber(),
          ...prev.slice(id + 1),
        ] as DicesNumber
    );
  };

  return { handleDiceSlept };
};

export default useHandleDice;
