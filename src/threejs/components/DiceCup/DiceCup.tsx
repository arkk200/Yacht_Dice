import useCastShadow from "@/threejs/hooks/useCastShadow";
import useReceiveShadow from "@/threejs/hooks/useReceiveShadow";
import { useGLTF } from "@react-three/drei";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import DiceCupCover from "../DiceCupCover/DiceCupCover";
import useRollDiceEffect from "./hooks/useRollDiceffect";
import useShakeDiceEffect from "./hooks/useShakeDiceffect";

const DiceCup = () => {
  const gltf = useGLTF("/diceCup.glb");

  useCastShadow(gltf.scene);
  useReceiveShadow(gltf.scene);

  const rigidBodyRef = useRef<RapierRigidBody>(null);

  useRollDiceEffect(rigidBodyRef);

  useShakeDiceEffect(rigidBodyRef);

  return (
    <group>
      <RigidBody
        ref={rigidBodyRef}
        colliders="trimesh"
        type="kinematicPosition"
        position={[1.75, 1.5, 0]}
        ccd
      >
        <primitive position={[-0.75, -0.5, 0]} object={gltf.scene} />
      </RigidBody>
      <DiceCupCover position={[0.5, 1.1, 0]} />
    </group>
  );
};

export default DiceCup;
