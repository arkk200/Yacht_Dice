import { RapierRigidBody, euler, quat } from "@react-three/rapier";
import { RefObject } from "react";

const useGetDiceNumber = () => {
  const getDiceNumber = (diceRigidRef: RefObject<RapierRigidBody>) => {
    const angle = euler().setFromQuaternion(
      quat(diceRigidRef.current?.rotation())
    );

    const diceNumber = getCalculatedDiceNumber(angle.x, angle.y, angle.z);
    return diceNumber;
  };

  return { getDiceNumber };
};

const getCalculatedDiceNumber = (x: number, y: number, z: number): number => {
  const eps = Math.PI / 4;
  const isZero = (angle: number) => Math.abs(angle) < eps;
  const isHalfPi = (angle: number) => Math.abs(angle - 0.5 * Math.PI) < eps;
  const isMinusHalfPi = (angle: number) =>
    Math.abs(0.5 * Math.PI + angle) < eps;
  const isPiOrMinusPi = (angle: number) =>
    Math.abs(Math.PI - angle) < eps || Math.abs(Math.PI + angle) < eps;

  if ((isZero(z) && isZero(x)) || (isPiOrMinusPi(z) && isPiOrMinusPi(x)))
    return 1;
  if ((isZero(x) && isHalfPi(z)) || (isPiOrMinusPi(x) && isMinusHalfPi(z)))
    return 2;
  if ((isMinusHalfPi(x) && isZero(y)) || (isHalfPi(x) && isPiOrMinusPi(y)))
    return 3;
  if ((isHalfPi(x) && isZero(y)) || (isMinusHalfPi(x) && isPiOrMinusPi(y)))
    return 4;
  if ((isZero(x) && isMinusHalfPi(z)) || (isPiOrMinusPi(x) && isHalfPi(z)))
    return 5;
  return 6;
};

export default useGetDiceNumber;
