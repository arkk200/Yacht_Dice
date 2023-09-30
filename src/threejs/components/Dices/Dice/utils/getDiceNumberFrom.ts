import { RapierRigidBody, euler, quat } from "@react-three/rapier";
import { RefObject } from "react";

const getDiceNumberFrom = (
  diceRigidRef: RefObject<RapierRigidBody>
): number => {
  const angle = euler().setFromQuaternion(
    quat(diceRigidRef.current?.rotation())
  );
  const { x, y, z } = angle;

  const eps = Math.PI / 4;
  const closeZero = (angle: number) => Math.abs(angle) < eps;
  const closeHalfPi = (angle: number) => Math.abs(angle - 0.5 * Math.PI) < eps;
  const closeMinusHalfPi = (angle: number) =>
    Math.abs(0.5 * Math.PI + angle) < eps;
  const closePiOrMinusPi = (angle: number) =>
    Math.abs(Math.PI - angle) < eps || Math.abs(Math.PI + angle) < eps;

  if (
    (closeZero(z) && closeZero(x)) ||
    (closePiOrMinusPi(z) && closePiOrMinusPi(x))
  )
    return 1;
  if (
    (closeZero(x) && closeHalfPi(z)) ||
    (closePiOrMinusPi(x) && closeMinusHalfPi(z))
  )
    return 2;
  if (
    (closeMinusHalfPi(x) && closeZero(y)) ||
    (closeHalfPi(x) && closePiOrMinusPi(y))
  )
    return 3;
  if (
    (closeHalfPi(x) && closeZero(y)) ||
    (closeMinusHalfPi(x) && closePiOrMinusPi(y))
  )
    return 4;
  if (
    (closeZero(x) && closeMinusHalfPi(z)) ||
    (closePiOrMinusPi(x) && closeHalfPi(z))
  )
    return 5;
  return 6;
};

export default getDiceNumberFrom;
