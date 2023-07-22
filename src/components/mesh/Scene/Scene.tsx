import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense, useEffect } from "react";
import Dices from "../Dices/Dices";
import DiceCup from "../DiceCup/DiceCup";
import DiceTray from "../DiceTray/DiceTray";
import { useEventAction } from "@/providers/DebuggingToolProvider/DebuggingToolProvider.hooks";

const Scene = () => {
  const { onClickToCall } = useEventAction();

  useEffect(() => {
    onClickToCall({
      아무숫자출력하기() {
        console.log(Math.random().toFixed(3));
      },
      아무문자출력하기() {
        console.log(Math.floor(Math.random() * 26 + 10).toString(36));
      },
    });
  }, [onClickToCall]);

  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={1} />
      <pointLight position={[5, 5, 5]} />
      <OrthographicCamera makeDefault position={[0, 7, 0]} zoom={70} />

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
