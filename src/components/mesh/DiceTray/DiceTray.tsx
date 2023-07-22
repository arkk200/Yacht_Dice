import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const DiceTray = () => {
  const gltf = useGLTF("/diceTray.glb");

  return (
    <RigidBody colliders="trimesh" type="fixed" position={[0, -1.5, 0]}>
      <primitive object={gltf.scene} />
    </RigidBody>
  );
};

export default DiceTray;
