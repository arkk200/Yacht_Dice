import { gameStatusState } from "@/stores/game.store";
import { RapierRigidBody } from "@react-three/rapier";
import gsap from "gsap";
import { RefObject, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Euler, Quaternion } from "three";
import useShakeDices from "./useShakeDices";

const useHandleDiceCup = (
  diceCupRigidBodyRef: RefObject<RapierRigidBody | null>
) => {
  const gameStatus = useRecoilValue(gameStatusState);

  const { shakeDices, removeShakeDicesEvents } =
    useShakeDices(diceCupRigidBodyRef);

  useEffect(() => {
    const 주사위굴리기 = () => {
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

    switch (gameStatus) {
      case "주사위흔들기":
        shakeDices();
        return removeShakeDicesEvents;
      case "주사위굴리기":
        주사위굴리기();
    }
  }, [diceCupRigidBodyRef, gameStatus, removeShakeDicesEvents, shakeDices]);
};

export default useHandleDiceCup;
