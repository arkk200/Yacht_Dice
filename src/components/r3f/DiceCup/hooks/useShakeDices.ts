import { useDocumentEventListener } from "@/providers/DocumentEventListenerProvider/DocumentEventListenerProvider.hooks";
import { useWindowEventListener } from "@/providers/WindowEventListenerProvider/WindowEventListenerProvider.hooks";
import { RapierRigidBody } from "@react-three/rapier";
import { RefObject } from "react";
import { Vector3 } from "three";

const useShakeDices = (diceCupRigidBodyRef: RefObject<RapierRigidBody>) => {
  const { addWindowEventListener, removeWindowEventListener } =
    useWindowEventListener();
  const { addDocumentEventListener, removeDocumentEventListener } =
    useDocumentEventListener();

  const shakeDices = () => {
    let center: { x: number; y: number } | null = null;

    let x: number = 0;
    let y: number = 0;

    const handleTransformedPosition = (e: MouseEvent) => {
      if (!center) center = { x: e.clientX - x, y: e.clientY - y };

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

    addDocumentEventListener("handleMouseLeave", "mouseenter", () => {
      center = null;
    });
    addWindowEventListener("handleBlur", "focus", () => {
      center = null;
    });
  };

  const removeShakeDicesEvents = () => {
    removeWindowEventListener("handleDiceCupMove");
    removeDocumentEventListener("handleMouseLeave");
    removeWindowEventListener("handleBlur");
  };

  return { shakeDices, removeShakeDicesEvents };
};

export default useShakeDices;
