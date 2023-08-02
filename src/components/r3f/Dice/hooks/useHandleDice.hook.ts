import {
  DicesNumber,
  DicesSlept,
  dicesNumberState,
  dicesSleptState,
  gameStatusState,
  isAllDicesSleptState,
  sortedDicesOrderState,
} from "@/stores/game.store";
import { RapierRigidBody } from "@react-three/rapier";
import { gsap } from "gsap";
import { RefObject, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import useGetDiceNumber from "./useGetDiceNumber";

const useHandleDice = (
  diceRigidBodyRef: RefObject<RapierRigidBody>,
  id: number
) => {
  const gameStatus = useRecoilValue(gameStatusState);
  const setDicesSlept = useSetRecoilState(dicesSleptState);
  const setDicesNumber = useSetRecoilState(dicesNumberState);
  const isAllDicesSlept = useRecoilValue(isAllDicesSleptState);
  const sortedDicesOrder = useRecoilValue(sortedDicesOrderState);

  const { getDiceNumber } = useGetDiceNumber();

  const handleDiceSlept = () => {
    if (gameStatus === "주사위굴리기") {
      diceRigidBodyRef.current?.setEnabled(false);
      setDicesSlept(
        (prev) =>
          [...prev.slice(0, id), true, ...prev.slice(id + 1)] as DicesSlept
      );
      setDicesNumber(
        (prev) =>
          [
            ...prev.slice(0, id),
            getDiceNumber(diceRigidBodyRef),
            ...prev.slice(id + 1),
          ] as DicesNumber
      );
    }
  };

  useEffect(() => {
    const diceRigidBody = diceRigidBodyRef.current;
    if (!diceRigidBody) return;

    if (isAllDicesSlept && gameStatus === "주사위굴리기") {
      const curPosition = diceRigidBody.translation();
      const curRotation = diceRigidBody.rotation();

      const order = sortedDicesOrder?.findIndex(
        (diceOrder) => diceOrder === id
      );

      const x = (order - 2) * 0.75;

      gsap.to(curPosition, {
        x,
        y: 3,
        z: 0,
        delay: 0.05 * order,
        duration: 0.25,
        onUpdate() {
          console.log(diceRigidBody.bodyType());
          diceRigidBody.setTranslation(curPosition, true);
        },
      });

      gsap.to(curRotation, {});
    }
  }, [diceRigidBodyRef, isAllDicesSlept, gameStatus, id, sortedDicesOrder]);

  return { handleDiceSlept };
};

export default useHandleDice;
