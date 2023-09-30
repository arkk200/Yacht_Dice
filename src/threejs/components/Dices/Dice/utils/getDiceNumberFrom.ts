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
  const closesZero = (angle: number) => Math.abs(angle) < eps;
  const closesHalfPi = (angle: number) => Math.abs(angle - 0.5 * Math.PI) < eps;
  const closesMinusHalfPi = (angle: number) =>
    Math.abs(0.5 * Math.PI + angle) < eps;
  const closesPiOrMinusPi = (angle: number) =>
    Math.abs(Math.PI - angle) < eps || Math.abs(Math.PI + angle) < eps;

  if (
    (closesZero(z) && closesZero(x)) ||
    (closesPiOrMinusPi(z) && closesPiOrMinusPi(x))
  )
    return 1;
  if (
    (closesZero(x) && closesHalfPi(z)) ||
    (closesPiOrMinusPi(x) && closesMinusHalfPi(z))
  )
    return 2;
  if (
    (closesMinusHalfPi(x) && closesZero(y)) ||
    (closesHalfPi(x) && closesPiOrMinusPi(y))
  )
    return 3;
  if (
    (closesHalfPi(x) && closesZero(y)) ||
    (closesMinusHalfPi(x) && closesPiOrMinusPi(y))
  )
    return 4;
  if (
    (closesZero(x) && closesMinusHalfPi(z)) ||
    (closesPiOrMinusPi(x) && closesHalfPi(z))
  )
    return 5;
  return 6;
};

export default getDiceNumberFrom;
