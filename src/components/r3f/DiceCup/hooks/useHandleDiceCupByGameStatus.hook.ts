import { gameStatusState } from "@/stores/game.store";
import { RapierRigidBody } from "@react-three/rapier";
import { RefObject, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Vector3 } from "three";

const useHandleDiceCup = (
  diceCupRigidBodyRef: RefObject<RapierRigidBody | null>
) => {
  const gameStatus = useRecoilValue(gameStatusState);

  useEffect(() => {
    const 주사위흔들기 = () => {
      let center: { x: number; y: number } | null = null;

      let x: number = 0;
      let y: number = 0;

      const handleDiceCupMove = (e: MouseEvent) => {
        const diceCupRigidBody = diceCupRigidBodyRef.current;
        if (!diceCupRigidBody) return;

        if (!center) center = { x: e.clientX, y: e.clientY };

        x = e.clientX - center.x;
        y = e.clientY - center.y;

        const limitPosition = 150;

        console.log(x, y);

        if (Math.abs(x) > limitPosition) {
          center.x = e.clientX - limitPosition * Math.sign(x);
          console.log(center.x);
          x = Math.sign(x) * limitPosition;
        }
        if (Math.abs(y) > limitPosition) {
          center.y = e.clientY - limitPosition * Math.sign(y);
          y = Math.sign(y) * limitPosition;
        }

        const sensityDivideNumber = 1000;

        diceCupRigidBody.setNextKinematicTranslation(
          new Vector3(
            1.75 + x / sensityDivideNumber,
            1.5 + Math.sin((x + y) / sensityDivideNumber),
            y / sensityDivideNumber
          )
        );
      };

      window.addEventListener("mousemove", handleDiceCupMove);

      return () => window.removeEventListener("mousemove", handleDiceCupMove);
    };

    switch (gameStatus) {
      case "주사위흔들기":
        return 주사위흔들기();
    }
  }, [diceCupRigidBodyRef, gameStatus]);
};

export default useHandleDiceCup;
