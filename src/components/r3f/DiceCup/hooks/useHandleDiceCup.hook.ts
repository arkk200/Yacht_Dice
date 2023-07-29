import { useDocumentEventListener } from "@/providers/DocumentEventListenerProvider/DocumentEventListenerProvider.hooks";
import { useWindowEventListener } from "@/providers/WindowEventListenerProvider/WindowEventListenerProvider.hooks";
import { gameStatusState } from "@/stores/game.store";
import { RapierRigidBody } from "@react-three/rapier";
import { RefObject, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Vector3 } from "three";

const useHandleDiceCup = (
  diceCupRigidBodyRef: RefObject<RapierRigidBody | null>
) => {
  const gameStatus = useRecoilValue(gameStatusState);

  const { addWindowEventListener, removeWindowEventListener } =
    useWindowEventListener();

  const { addDocumentEventListener, removeDocumentEventListener } =
    useDocumentEventListener();

  useEffect(() => {
    const 주사위흔들기 = () => {
      let center: { x: number; y: number } | null = null;

      let x: number = 0;
      let y: number = 0;

      const handleTransformedPosition = (e: MouseEvent) => {
        if (!center) center = { x: e.clientX, y: e.clientY };

        x = e.clientX - center.x;
        y = e.clientY - center.y;

        const limitPosition = 150;

        if (Math.abs(x) > limitPosition) {
          center.x = e.clientX - limitPosition * Math.sign(x);
          x = Math.sign(x) * limitPosition;
        }
        if (Math.abs(y) > limitPosition) {
          center.y = e.clientY - limitPosition * Math.sign(y);
          y = Math.sign(y) * limitPosition;
        }
      };

      addWindowEventListener(
        "handleDiceCupMove",
        "mousemove",
        (e: MouseEvent) => {
          const diceCupRigidBody = diceCupRigidBodyRef.current;
          if (!diceCupRigidBody) return;

          handleTransformedPosition(e);

          const sensityDivideNumber = 1000;

          diceCupRigidBody.setNextKinematicTranslation(
            new Vector3(
              1.75 + x / sensityDivideNumber,
              1.5 + Math.sin((x + y) / 2000),
              y / sensityDivideNumber
            )
          );
        }
      );

      addDocumentEventListener("handleMouseLeave", "mouseleave", () => {
        center = null;
      });
      addWindowEventListener("handleBlur", "blur", () => {
        center = null;
        console.log("blur");
      });
    };

    switch (gameStatus) {
      case "주사위흔들기":
        주사위흔들기();
        return () => {
          removeWindowEventListener("handleDiceCupMove");
          removeDocumentEventListener("handleMouseLeave");
          removeWindowEventListener("handleBlur");
        };
    }
  }, [
    diceCupRigidBodyRef,
    gameStatus,
    addWindowEventListener,
    removeWindowEventListener,
    addDocumentEventListener,
    removeDocumentEventListener,
  ]);
};

export default useHandleDiceCup;
