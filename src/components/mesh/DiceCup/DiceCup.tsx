import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect } from "react";
import { Mesh, Object3D } from "three";

const DiceCup = () => {
  const gltf = useGLTF("/diceCup.glb");

  useEffect(() => {
    gltf.scene.traverse((node: Object3D) => {
      if (node instanceof Mesh) {
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });
  }, [gltf.scene]);

  return (
    <RigidBody colliders="trimesh" type="fixed" position={[1.5, 1, 0]}>
      <primitive object={gltf.scene} />
    </RigidBody>
  );
};

export default DiceCup;
