import "@/styles/fonts.styles.css";
import { useEffect, useState } from "react";
import { css, styled } from "styled-components";
import ScoreSheet from "./components/ScoreSheet/ScoreSheet";
import Scene from "./components/r3f/Scene/Scene";
import { useWindowEventListener } from "./providers/WindowEventListenerProvider/WindowEventListenerProvider.hooks";
import GlobalStyle from "./styles/global.styles";

function App() {
  const [isAppFlattened, setIsAppFlattened] = useState(false);

  const { addWindowEventListener, removeWindowEventListener } =
    useWindowEventListener();

  useEffect(() => {
    addWindowEventListener("handleSizeChange", "resize", () => {
      if (window.innerWidth / window.innerHeight > 1920 / 1080) {
        setIsAppFlattened(true);
      } else {
        setIsAppFlattened(false);
      }
    });

    return () => removeWindowEventListener("handleSizeChange");
  }, [addWindowEventListener, removeWindowEventListener]);

  return (
    <>
      <GlobalStyle />
      <StyledApp $isAppFlattened={isAppFlattened}>
        <ScoreSheet />
        <Scene />
      </StyledApp>
    </>
  );
}

export default App;

const StyledApp = styled.div<{ $isAppFlattened: boolean }>`
  display: flex;
  width: 100vw;
  max-height: 100vh;
  aspect-ratio: 1920 / 1080;
  margin: auto;

  ${({ $isAppFlattened }) =>
    $isAppFlattened &&
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
