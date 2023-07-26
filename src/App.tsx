import "@/styles/App.css";
import "@/styles/reset.css";
import Scene from "./components/mesh/Scene/Scene";
import DebuggingToolProvider from "./providers/DebuggingToolProvider/DebuggingToolProvider";

function App() {
  return (
    <DebuggingToolProvider>
      <div className="App">
        <div
          style={{
            backgroundColor: "skyblue",
            width: "32vw",
            height: "100%",
            flexShrink: 0,
          }}
        ></div>
        <Scene />
      </div>
    </DebuggingToolProvider>
  );
}

export default App;
