import { useEventAction } from "@/providers/DebuggingToolProvider/DebuggingToolProvider.hooks";
import easeInOutQuad from "@/utils/animations/easeInOutQuad";
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

  const x = useRef(0);
  const targetRotation = (Math.PI / 180) * 110;

  useFrame(() => {
    const rigidBody = rigidBodyRef.current;
    if (is기울이기 && rigidBody && x.current !== undefined) {
      x.current += 2;

      if (x.current > 100) {
        x.current = 100;
      }

      rigidBody.setNextKinematicRotation(
        new Quaternion().setFromEuler(
          new Euler(0, 0, easeInOutQuad(x.current / 100) * targetRotation)
        )
      );
    }
  });

  useEffect(() => {
    onClickToCall({
      컵기울이기() {
        setIs기울이기(true);
      },
    });
  }, [onClickToCall]);

  return (
    <RigidBody
      ref={rigidBodyRef}
      colliders="trimesh"
      type="kinematicPosition"
      position={[1.5, 1.75, 0]}
    >
      <primitive position={[-0.5, -0.75, 0]} object={gltf.scene} />
    </RigidBody>
  );
};

export default DiceCup;
