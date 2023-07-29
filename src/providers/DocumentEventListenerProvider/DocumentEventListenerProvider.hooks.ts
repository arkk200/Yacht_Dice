import { useContext } from "react";
import { DocumentEventListenerContext } from "./DocumentEventListenerProvider";

export const useDocumentEventListener = () => {
  const value = useContext(DocumentEventListenerContext);
  if (!value)
    throw Error(
      "useDocumentEventListener should be used within WindowEventListenerProvider"
    );
  return value;
};
