import { RapierRigidBody, euler, quat } from "@react-three/rapier";
import { RefObject } from "react";
import getCalculatedDiceNumber from "../utils/getCalculatedDiceNumber";

const useGetDiceNumber = (diceRigidRef: RefObject<RapierRigidBody>) => {
  const getDiceNumber = () => {
    const angle = euler().setFromQuaternion(
      quat(diceRigidRef.current?.rotation())
    );

    const diceNumber = getCalculatedDiceNumber(angle.x, angle.y, angle.z);
    return diceNumber;
  };

  return { getDiceNumber };
};

export default useGetDiceNumber;
