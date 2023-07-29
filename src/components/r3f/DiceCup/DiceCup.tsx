import useCastShadow from "@/hooks/useCastShadow";
import useReceiveShadow from "@/hooks/useReceiveShadow";
import { useEventAction } from "@/providers/DebuggingToolProvider/DebuggingToolProvider.hooks";
import easeInOutQuad from "@/utils/animations/easeInOutQuad";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import { Euler, Quaternion, Vector3 } from "three";

const DiceCup = () => {
  const [is기울이기, setIs기울이기] = useState(false);

  const gltf = useGLTF("/diceCup.glb");

  useCastShadow(gltf.scene);
  useReceiveShadow(gltf.scene);

  const { onClickToCall, onKeyEnterToCall } = useEventAction();
  const rigidBodyRef = useRef<RapierRigidBody>(null);

  const x = useRef(0);
  const targetRotation = (Math.PI / 180) * 120;

  useFrame(() => {
    const rigidBody = rigidBodyRef.current;
    if (is기울이기 && rigidBody && x.current !== undefined) {
      x.current += 2;

      if (x.current > 60) {
        x.current = 60;
      }

      rigidBody.setNextKinematicRotation(
        new Quaternion().setFromEuler(
          new Euler(0, 0, easeInOutQuad(x.current / 60) * targetRotation)
        )
      );
    }
  });

  useEffect(() => {
    onClickToCall({
      주사위굴리기() {
        setIs기울이기(true);
      },
    });
  }, [onClickToCall]);

  useEffect(() => {
    let center: { x: number; y: number } | null = null;

    const sensityDivideNumber = 1000;
    const limitPosition = 0.15;
    let x: number = 0,
      y: number = 0;

    const handleDiceCupMove = (e: MouseEvent) => {
      const rigidBody = rigidBodyRef.current;
      if (!rigidBody) return;

      if (!center) center = { x: e.clientX, y: e.clientY };

      x = (e.clientX - center.x) / sensityDivideNumber;
      y = (e.clientY - center.y) / sensityDivideNumber;

      if (Math.abs(x) > limitPosition) x = Math.sign(x) * limitPosition;
      if (Math.abs(y) > limitPosition) y = Math.sign(y) * limitPosition;

      rigidBody.setNextKinematicTranslation(new Vector3(1.75 + x, 1.5, y));
    };

    onKeyEnterToCall({
      Space() {
        window.addEventListener("mousemove", handleDiceCupMove);
        console.log("스페이스바 입력");
      },
    });
  }, [onKeyEnterToCall]);

  return (
    <RigidBody
      ref={rigidBodyRef}
      colliders="trimesh"
      type="kinematicPosition"
      position={[1.75, 1.5, 0]}
      ccd
    >
      <primitive position={[-0.75, -0.5, 0]} object={gltf.scene} />
    </RigidBody>
  );
};

export default DiceCup;
