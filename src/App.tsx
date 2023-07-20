import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "@/styles/App.css";
import "@/styles/reset.css";
import DiceCup from "./components/mesh/DiceCup/DiceCup";

function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [0, 5, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} />
        <OrbitControls />
        <DiceCup />
      </Canvas>
    </div>
  );
}

export default App;
