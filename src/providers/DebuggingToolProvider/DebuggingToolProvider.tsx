import useWindowEvent from "@/hooks/useWindowEvent";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import DebuggingTool from "./DebuggingTool/DebuggingTool";

type onClickInfo = { [key in string]: () => void };
type onKeyEnterInfo = { [key in string]: () => void };

export const EventActionContext = createContext<{
  onClickToCall(onClickInfo: onClickInfo): void;
  onKeyEnterToCall(onKeyEnterInfo: onKeyEnterInfo): void;
} | null>(null);

interface PropTypes {
  children: ReactNode;
}

const DebuggingToolProvider = ({ children }: PropTypes) => {
  const [onClickCallbacks, setOnClickCallbacks] = useState({});
  const [onKeyEnterCallbacks, setOnKeyEnterCallbacks] =
    useState<onKeyEnterInfo>({});

  const { addWindowEventListener, removeWindowEventListener } =
    useWindowEvent();

  useEffect(() => {
    Object.entries(onKeyEnterCallbacks).map(([code, callback]) => {
      addWindowEventListener("handleKeyDown", "keydown", (e: KeyboardEvent) => {
        e.code === code && callback();
      });
    });

    if (Object.keys(onKeyEnterCallbacks).length !== 0)
      setOnKeyEnterCallbacks({});
    () => removeWindowEventListener("handleKeyDown");
  }, [onKeyEnterCallbacks, addWindowEventListener, removeWindowEventListener]);

  const actions = useMemo(
    () => ({
      onClickToCall(onClickInfo: onClickInfo) {
        setOnClickCallbacks((prev) => ({ ...prev, ...onClickInfo }));
      },
      onKeyEnterToCall(onKeyEnterInfo: onKeyEnterInfo) {
        setOnKeyEnterCallbacks(onKeyEnterInfo);
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
