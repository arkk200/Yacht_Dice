import { useEffect } from "react";
import { Group, Mesh, Object3D } from "three";

const useReceiveShadow = (scene: Group) => {
  useEffect(() => {
    scene.traverse((node: Object3D) => {
      if (node instanceof Mesh) {
        node.receiveShadow = true;
      }
    });
  }, [scene]);
};

export default useReceiveShadow;
