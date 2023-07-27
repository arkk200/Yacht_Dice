import { useEventAction } from "@/providers/DebuggingToolProvider/DebuggingToolProvider.hooks";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import { Euler, Mesh, Object3D, Quaternion } from "three";

const DiceCup = () => {
  const [is기울이기, setIs기울이기] = useState(false);

  const gltf = useGLTF("/diceCup.glb");

  useEffect(() => {
    gltf.scene.traverse((node: Object3D) => {
      if (node instanceof Mesh) {
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });
  }, [gltf.scene]);

  const { onClickToCall } = useEventAction();
  const rigidBodyRef = useRef<RapierRigidBody>(null);

  useFrame(() => {
    if (is기울이기) {
      rigidBodyRef.current?.setNextKinematicRotation(
        new Quaternion().setFromEuler(new Euler(Math.PI / 4, 0, 0))
      );
    }
  });

  useEffect(() => {
    onClickToCall({
      컵기울이기() {
        setIs기울이기(true);
        console.log("컵 기울이는 중...", rigidBodyRef);
      },
    });
  }, [onClickToCall]);

  return (
    <RigidBody
      ref={rigidBodyRef}
      colliders="trimesh"
      type="kinematicPosition"
      position={[1, 1, 0]}
    >
      <primitive object={gltf.scene} />
    </RigidBody>
  );
};

export default DiceCup;
