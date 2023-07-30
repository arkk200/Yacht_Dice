import { useDocumentEventListener } from "@/providers/DocumentEventListenerProvider/DocumentEventListenerProvider.hooks";
import { useWindowEventListener } from "@/providers/WindowEventListenerProvider/WindowEventListenerProvider.hooks";
import { gameStatusState } from "@/stores/game.store";
import { RapierRigidBody } from "@react-three/rapier";
import gsap from "gsap";
import { RefObject, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Euler, Quaternion, Vector3 } from "three";

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
        주사위흔들기();
        return () => {
          removeWindowEventListener("handleDiceCupMove");
          removeDocumentEventListener("handleMouseLeave");
          removeWindowEventListener("handleBlur");
        };
      case "주사위굴리기":
        주사위굴리기();
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
