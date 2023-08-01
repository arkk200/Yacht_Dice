import { useWindowEventListener } from "@/providers/WindowEventListenerProvider/WindowEventListenerProvider.hooks";
import { gameStatusState } from "@/stores/game.store";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense, useEffect } from "react";
import { useRecoilState } from "recoil";
import DiceCup from "../DiceCup/DiceCup";
import DiceTray from "../DiceTray/DiceTray";
import Dices from "../Dices/Dices";

const Scene = () => {
  const [gameStatus, setGameStatus] = useRecoilState(gameStatusState);

  const { addWindowEventListener, removeWindowEventListener } =
    useWindowEventListener();

  useEffect(() => {
    addWindowEventListener("handleGameStatusChange", "click", () => {
      switch (gameStatus) {
        case "주사위흔들기":
          setGameStatus("주사위굴리기");
          break;
      }
    });

    return () => removeWindowEventListener("handleGameStatusChange");
  }, [
    gameStatus,
    setGameStatus,
    addWindowEventListener,
    removeWindowEventListener,
  ]);

  return (
    <Canvas camera={{ position: [0, 15, 0], fov: 20 }} shadows>
      {/* <OrbitControls /> */}
      <ambientLight intensity={1} />
      <directionalLight position={[3, 25, -3]} castShadow />
      {/* <OrthographicCamera makeDefault position={[0, 7, 0]} zoom={70} /> */}

      <Suspense>
        <Physics
          gravity={[0, -12, 0]}
          colliders={false}
          predictionDistance={0.1}
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
