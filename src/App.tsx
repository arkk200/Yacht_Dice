import "@/styles/fonts.style.css";
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import { css, styled } from "styled-components";
import ScoreSheet from "./components/ScoreSheet/ScoreSheet";
import Scene from "./components/r3f/Scene/Scene";
import useWindowEvent from "./hooks/useWindowEvent";
import DebuggingToolProvider from "./providers/DebuggingToolProvider/DebuggingToolProvider";
import GlobalStyle from "./styles/global.style";

function App() {
  const [isAppFlattened, setIsAppFlattened] = useState(false);

  const { addWindowEventListener, removeWindowEventListener } =
    useWindowEvent();

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
    <DebuggingToolProvider>
      <RecoilRoot>
        <GlobalStyle />
        <StyledApp $isAppFlattened={isAppFlattened}>
          <ScoreSheet />
          <Scene />
        </StyledApp>
      </RecoilRoot>
    </DebuggingToolProvider>
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
