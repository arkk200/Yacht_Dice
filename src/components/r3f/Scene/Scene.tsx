import { useWindowEventListener } from "@/providers/WindowEventListenerProvider/WindowEventListenerProvider.hooks";
import { gameStatusState } from "@/stores/game.store";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import DiceCup from "../DiceCup/DiceCup";
import DiceTray from "../DiceTray/DiceTray";
import Dices from "../Dices/Dices";

const n = 0;

const Scene = () => {
  const setGameStatus = useSetRecoilState(gameStatusState);
  const { addWindowEventListener, removeWindowEventListener } =
    useWindowEventListener();

  useEffect(() => {
    addWindowEventListener("handleGameStatusChange", "click", () => {
      setGameStatus((prev) => {
        switch (prev) {
          case "주사위흔들기":
            return "주사위굴리기";
          default:
            return "주사위흔들기";
        }
      });
    });

    return () => removeWindowEventListener("handleGameStatusChange");
  }, [setGameStatus, addWindowEventListener, removeWindowEventListener]);
  return (
    <Canvas camera={{ position: n ? [0, 0, 15] : [0, 20, 0], fov: 20 }} shadows>
      <OrbitControls />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 25, -3]} castShadow />
      <OrthographicCamera makeDefault position={[0, 7, 0]} zoom={70} />

      <Suspense>
        <Physics
          gravity={[0, -12, 0]}
          colliders={false}
          predictionDistance={0.09}
          debug
        >
          <Dices />
          <DiceCup />
          <DiceTray />
        </Physics>
      </Suspense>
    </Canvas>
  );
};

export default Scene;
