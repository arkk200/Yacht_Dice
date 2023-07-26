import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect } from "react";
import { Mesh, Object3D } from "three";

const DiceTray = () => {
  const gltf = useGLTF("/diceTray.glb");

  useEffect(() => {
    gltf.scene.traverse((node: Object3D) => {
      if (node instanceof Mesh) {
        node.receiveShadow = true;
      }
    });
  }, [gltf.scene]);

  return (
    <RigidBody colliders="trimesh" type="fixed" position={[0, -2, 0]}>
      <primitive object={gltf.scene} />
    </RigidBody>
  );
};

export default DiceTray;
