import { useGLTF } from "@react-three/drei";

const DiceCup = () => {
  const gltf = useGLTF("/diceCup.glb");

  return <primitive object={gltf.scene} />;
};

export default DiceCup;
