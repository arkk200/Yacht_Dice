import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "@/styles/App.css";
import "@/styles/reset.css";
import DiceCup from "./components/mesh/DiceCup/DiceCup";
import { Suspense } from "react";
import { Physics, RigidBody } from "@react-three/rapier";

function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [0, 5, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} />
        <OrbitControls />

        <Suspense>
          <Physics gravity={[0, -2, 0]} colliders={false} debug>
            <RigidBody colliders="trimesh" type="fixed">
              <DiceCup />
            </RigidBody>
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
