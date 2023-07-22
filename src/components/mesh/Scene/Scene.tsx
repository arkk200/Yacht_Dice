import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import Dices from "../Dices/Dices";
import DiceCup from "../DiceCup/DiceCup";
import DiceTray from "../DiceTray/DiceTray";

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 7, 0] }}>
      <OrthographicCamera />
      <ambientLight intensity={1} />
      <pointLight position={[5, 5, 5]} />
      <OrbitControls />

      <Suspense>
        <Physics gravity={[0, -2, 0]} colliders={false} debug>
          <Dices />
          <DiceCup />
          <DiceTray />
        </Physics>
      </Suspense>
    </Canvas>
  );
};

export default Scene;
