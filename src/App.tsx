import "@/styles/fonts.style.css";
import { useEffect, useState } from "react";
import { css, styled } from "styled-components";
import ScoreSheet from "./components/ScoreSheet/ScoreSheet";
import Scene from "./components/r3f/Scene/Scene";
import DebuggingToolProvider from "./providers/DebuggingToolProvider/DebuggingToolProvider";
import GlobalStyle from "./styles/global.style";

function App() {
  const [isAppFlattened, setIsAppFlattened] = useState(false);

  useEffect(() => {
    const handleSizeChange = () => {
      if (window.innerWidth / window.innerHeight > 1920 / 1080) {
        setIsAppFlattened(true);
      } else {
        setIsAppFlattened(false);
      }
    };

    window.addEventListener("resize", handleSizeChange);

    return () => window.removeEventListener("resize", handleSizeChange);
  }, []);

  return (
    <DebuggingToolProvider>
      <GlobalStyle />
      <StyledApp $isAppFlattened={isAppFlattened}>
        <ScoreSheet />
        <Scene />
      </StyledApp>
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
