import useCastShadow from "@/hooks/useCastShadow";
import useReceiveShadow from "@/hooks/useReceiveShadow";
import { useEventAction } from "@/providers/DebuggingToolProvider/DebuggingToolProvider.hooks";
import easeInOutQuad from "@/utils/animations/easeInOutQuad";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import { Euler, Quaternion } from "three";
import useHandleDiceCup from "./hooks/useHandleDiceCup.hook";

const DiceCup = () => {
  const gltf = useGLTF("/diceCup.glb");

  useCastShadow(gltf.scene);
  useReceiveShadow(gltf.scene);

  const rigidBodyRef = useRef<RapierRigidBody>(null);

  useHandleDiceCup(rigidBodyRef);

  const [is기울이기, setIs기울이기] = useState(false);

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

  const { onClickToCall } = useEventAction();

  useEffect(() => {
    onClickToCall({
      주사위굴리기() {
        setIs기울이기(true);
      },
    });
  }, [onClickToCall]);

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
