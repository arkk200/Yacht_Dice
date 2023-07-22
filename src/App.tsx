import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "@/styles/App.css";
import "@/styles/reset.css";
import DiceCup from "./components/mesh/DiceCup/DiceCup";
import { Suspense } from "react";
import { Physics, RigidBody } from "@react-three/rapier";
import Dice from "./components/mesh/Dice/Dice";
import DiceTray from "./components/mesh/DiceTray/DiceTray";

function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [0, 7, 0] }}>
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 5]} />
        <OrbitControls />

        <Suspense>
          <Physics gravity={[0, -2, 0]} colliders={false} debug>
            <RigidBody
              colliders="cuboid"
              restitution={0.3}
              position={[0, 1, 0]}
            >
              <Dice />
            </RigidBody>
            <RigidBody colliders="trimesh" type="fixed" position={[0, 1, 0]}>
              <DiceCup />
            </RigidBody>
            <RigidBody colliders="trimesh" type="fixed">
              <DiceTray />
            </RigidBody>
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
