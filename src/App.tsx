import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "@/styles/App.css";
import "@/styles/reset.css";
import DiceCup from "./components/mesh/DiceCup/DiceCup";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";
import DiceTray from "./components/mesh/DiceTray/DiceTray";
import Dices from "./components/mesh/Dices/Dices";

function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [0, 7, 0] }}>
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
    </div>
  );
}

export default App;
