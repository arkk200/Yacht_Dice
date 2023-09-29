import useReceiveShadow from "@/threejs/hooks/useReceiveShadow";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const DiceTray = () => {
  const gltf = useGLTF("/diceTray.glb");

  useReceiveShadow(gltf.scene);

  return (
    <RigidBody colliders="trimesh" type="fixed" position={[0, -2, 0]}>
      <primitive object={gltf.scene} />
    </RigidBody>
  );
};

export default DiceTray;
