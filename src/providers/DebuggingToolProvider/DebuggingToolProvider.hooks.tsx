import { useContext } from "react";
import { EventActionContext } from "./DebuggingToolProvider";

export const useEventAction = () => {
  const value = useContext(EventActionContext);
  if (!value)
    throw Error("useEventAction should be used within DebuggingToolProvider");
  return value;
};
