import { gameStatusState } from "@/stores/game.store";
import { RapierRigidBody } from "@react-three/rapier";
import { RefObject, useEffect } from "react";
import { useRecoilValue } from "recoil";
import useRollDices from "./useRollDices";
import useShakeDices from "./useShakeDices";

const useHandleDiceCup = (
  diceCupRigidBodyRef: RefObject<RapierRigidBody | null>
) => {
  const gameStatus = useRecoilValue(gameStatusState);

  const { shakeDices, removeShakeDicesEvents } =
    useShakeDices(diceCupRigidBodyRef);

  const { rollDices } = useRollDices(diceCupRigidBodyRef);

  useEffect(() => {
    switch (gameStatus) {
      case "주사위흔들기":
        shakeDices();
        return removeShakeDicesEvents;
      case "주사위굴리기":
        rollDices();
    }
  }, [gameStatus, shakeDices, removeShakeDicesEvents, rollDices]);
};

export default useHandleDiceCup;
