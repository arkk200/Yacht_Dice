import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const DiceCup = () => {
  const gltf = useGLTF("/diceCup.glb");

  return (
    <RigidBody colliders="trimesh" type="fixed" position={[0, 1, 0]}>
      <primitive object={gltf.scene} />
    </RigidBody>
  );
};

export default DiceCup;
