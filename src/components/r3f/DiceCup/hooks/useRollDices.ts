import { RapierRigidBody } from "@react-three/rapier";
import { gsap } from "gsap";
import { RefObject } from "react";
import { Euler, Quaternion } from "three";

const useRollDices = (
  diceCupRigidBodyRef: RefObject<RapierRigidBody | null>
) => {
  const rollDices = () => {
    const curEuler = new Euler(0, 0, 0);

    const tl = gsap.timeline({
      onUpdate: () => {
        if (!diceCupRigidBodyRef.current) return;
        diceCupRigidBodyRef.current.setNextKinematicRotation(
          new Quaternion().setFromEuler(curEuler)
        );
      },
    });

    tl.to(curEuler, { duration: 1, z: (Math.PI / 180) * 120 });
  };

  return { rollDices };
};

export default useRollDices;
