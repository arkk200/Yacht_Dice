import { useContext } from "react";
import { WindowEventListenerContext } from "./WindowEventListenerProvider";

export const useWindowEventListener = () => {
  const value = useContext(WindowEventListenerContext);
  if (!value)
    throw Error(
      "useWindowEventListener should be used within WindowEventListenerProvider"
    );
  return value;
};
