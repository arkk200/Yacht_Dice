import "@/styles/fonts.styles.css";
import { css, styled } from "styled-components";
import useIsWindowFlattened from "./hooks/useIsAppFlattened";
import ControlPanal from "./react/components/ControlPanal/ControlPanel";
import ScoreSheet from "./react/components/ScoreSheet/ScoreSheet";
import GlobalStyle from "./styles/global.styles";
import Scene from "./threejs/components/Scene/Scene";

function App() {
  const { isWindowFlattened } = useIsWindowFlattened();

  return (
    <>
      <GlobalStyle />
      <StyledApp $isWindowFlattened={isWindowFlattened}>
        <ScoreSheet />
        <GameDisplay>
          <ControlPanal />
          <Scene />
        </GameDisplay>
      </StyledApp>
    </>
  );
}

export default App;

const StyledApp = styled.div<{ $isWindowFlattened: boolean }>`
  display: flex;
  width: 100vw;
  max-height: 100vh;
  aspect-ratio: 1920 / 1080;
  margin: auto;

  ${({ $isWindowFlattened }) =>
    $isWindowFlattened &&
    css`
      width: auto;
      max-width: 100vw;
      height: auto;
      height: 100vh;
    `}

  background-image: url(/lying-cat.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
`;

const GameDisplay = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  aspect-ratio: 528/1080;
`;
