import { RecoilRoot } from "recoil";
import DebuggingToolProvider from "./DebuggingToolProvider/DebuggingToolProvider";
import DocumentEventListenerProvider from "./DocumentEventListenerProvider/DocumentEventListenerProvider";
import WindowEventListenerProvider from "./WindowEventListenerProvider/WindowEventListenerProvider";
import ProviderProps from "./types/provider.types";

const Provider = ({ children }: ProviderProps) => {
  return (
    <WindowEventListenerProvider>
      <DocumentEventListenerProvider>
        <DebuggingToolProvider>
          <RecoilRoot>{children}</RecoilRoot>
        </DebuggingToolProvider>
      </DocumentEventListenerProvider>
    </WindowEventListenerProvider>
  );
};

export default Provider;
