import { RapierRigidBody } from "@react-three/rapier";
import { gsap } from "gsap";
import { RefObject } from "react";
import { Vector3 } from "three";

const useRollDices = (diceCupRigidBodyRef: RefObject<RapierRigidBody>) => {
  const rollDices = () => {
    const diceCupRigidBody = diceCupRigidBodyRef.current;
    if (!diceCupRigidBody) return;

    const curRotation = diceCupRigidBody.rotation();
    const curPosition = diceCupRigidBody.translation();

    const tl = gsap.timeline();

    tl.to(curRotation, {
      duration: 1,
      z: (Math.PI / 180) * 120,
      onUpdate() {
        diceCupRigidBody.setRotation(curRotation, true);
      },
    }).to(curPosition, {
      delay: 0.9,
      duration: 0.6,
      x: 4,
      z: 0,
      onUpdate() {
        const { x, y, z } = curPosition;
        diceCupRigidBody.setTranslation(new Vector3(x, y, z), true);
      },
    });
  };

  return { rollDices };
};

export default useRollDices;
