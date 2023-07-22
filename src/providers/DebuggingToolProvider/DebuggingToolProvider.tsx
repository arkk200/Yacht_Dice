import { ReactNode, createContext, useMemo, useState } from "react";
import DebuggingTool from "./DebuggingTool/DebuggingTool";

type onClickInfoTypes = { [key in string]: () => void };

export const EventActionContext = createContext<{
  onClickToCall(onClickInfo: onClickInfoTypes): void;
} | null>(null);

interface PropTypes {
  children: ReactNode;
}

const DebuggingToolProvider = ({ children }: PropTypes) => {
  const [onClickCallbacks, setOnClickCallbacks] = useState({});

  const actions = useMemo(
    () => ({
      onClickToCall(onClickInfo: onClickInfoTypes) {
        setOnClickCallbacks((prev) => ({ ...prev, ...onClickInfo }));
      },
    }),
    [setOnClickCallbacks]
  );

  return (
    <EventActionContext.Provider value={actions}>
      {children}
      <DebuggingTool onClickCallbacks={onClickCallbacks} />
    </EventActionContext.Provider>
  );
};

export default DebuggingToolProvider;
