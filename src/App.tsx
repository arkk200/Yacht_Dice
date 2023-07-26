// import "@/styles/App.css";
import { styled } from "styled-components";
import ScoreSheet from "./components/ScoreSheet/ScoreSheet";
import Scene from "./components/r3f/Scene/Scene";
import DebuggingToolProvider from "./providers/DebuggingToolProvider/DebuggingToolProvider";
import GlobalStyle from "./styles/global.style";

function App() {
  return (
    <DebuggingToolProvider>
      <GlobalStyle />
      <StyledApp>
        <ScoreSheet />
        <Scene />
      </StyledApp>
    </DebuggingToolProvider>
  );
}

export default App;

const StyledApp = styled.div`
  display: flex;
  width: 100vw;
  max-height: 100vh;
  aspect-ratio: 1920 / 1080;

  background-image: url(/lying-cat.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
`;
