import { useGLTF } from "@react-three/drei";

const DiceTray = () => {
  const gltf = useGLTF("/diceTray.glb");

  return <primitive object={gltf.scene} />;
};

export default DiceTray;
