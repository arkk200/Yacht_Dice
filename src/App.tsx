import "@/styles/fonts.styles.css";
import { useEffect, useState } from "react";
import { css, styled } from "styled-components";
import ScoreSheet from "./react/components/ScoreSheet/ScoreSheet";
import GlobalStyle from "./styles/global.styles";
import Scene from "./threejs/components/Scene/Scene";

function App() {
  const [isAppFlattened, setIsAppFlattened] = useState(false);

  useEffect(() => {
    const onResizeWindow = () => {
      if (window.innerWidth / window.innerHeight > 1920 / 1080) {
        setIsAppFlattened(true);
      } else {
        setIsAppFlattened(false);
      }
    };
    window.addEventListener("resize", onResizeWindow);

    return () => window.removeEventListener("resize", onResizeWindow);
  }, []);

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
