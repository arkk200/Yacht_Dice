import { useEffect } from "react";
import { Group, Mesh, Object3D } from "three";

const useCastShadow = (scene: Group) => {
  useEffect(() => {
    scene.traverse((node: Object3D) => {
      if (node instanceof Mesh) {
        node.castShadow = true;
      }
    });
  }, [scene]);
};

export default useCastShadow;
