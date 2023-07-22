import "@/styles/App.css";
import "@/styles/reset.css";
import Scene from "./components/mesh/Scene/Scene";
import DebuggingToolProvider from "./providers/DebuggingToolProvider/DebuggingToolProvider";

function App() {
  return (
    <DebuggingToolProvider>
      <div className="App">
        <Scene />
      </div>
    </DebuggingToolProvider>
  );
}

export default App;
