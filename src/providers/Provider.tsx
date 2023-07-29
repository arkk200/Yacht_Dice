import { RecoilRoot } from "recoil";
import DebuggingToolProvider from "./DebuggingToolProvider/DebuggingToolProvider";
import WindowEventListenerProvider from "./WindowEventListenerProvider/WindowEventListenerProvider";
import ProviderProps from "./types/provider.types";

const Provider = ({ children }: ProviderProps) => {
  return (
    <DebuggingToolProvider>
      <WindowEventListenerProvider>
        <RecoilRoot>{children}</RecoilRoot>
      </WindowEventListenerProvider>
    </DebuggingToolProvider>
  );
};

export default Provider;
