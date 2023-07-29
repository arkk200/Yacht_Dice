import { createContext, useMemo, useRef } from "react";
import ProviderProps from "../types/provider.types";

type DocumentEventListener = <K extends string = keyof DocumentEventMap>(
  key: string,
  type: K,
  listener: K extends keyof DocumentEventMap
    ? (this: Document, ev: DocumentEventMap[K]) => unknown
    : EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
) => unknown;

interface EventListenerInfo<K extends string = keyof DocumentEventMap> {
  key: string;
  type: K;
  listener: K extends keyof DocumentEventMap
    ? (this: Document, ev: DocumentEventMap[K]) => unknown
    : EventListenerOrEventListenerObject;
  options?: boolean | AddEventListenerOptions;
}

export const DocumentEventListenerContext = createContext<{
  addDocumentEventListener: DocumentEventListener;
  removeDocumentEventListener: (key: string) => void;
} | null>(null);

const DocumentEventListenerProvider = ({ children }: ProviderProps) => {
  const eventListenersRef = useRef<
    EventListenerInfo<string | keyof DocumentEventMap>[]
  >([]);

  const actions = useMemo(
    (): {
      addDocumentEventListener: DocumentEventListener;
      removeDocumentEventListener: (key: string) => void;
    } => ({
      addDocumentEventListener: (key, type, listener, options) => {
        document.addEventListener(type, listener, options);
        eventListenersRef.current = [
          ...eventListenersRef.current,
          { key, type, listener, options },
        ];
      },
      removeDocumentEventListener: (key: string) => {
        eventListenersRef.current = eventListenersRef.current.filter(
          (eventListener) => {
            if (eventListener.key === key) {
              const { type, listener, options } = eventListener;
              document.removeEventListener(type, listener, options);
              return false;
            }
            return true;
          }
        );
      },
    }),
    []
  );

  return (
    <DocumentEventListenerContext.Provider value={actions}>
      {children}
    </DocumentEventListenerContext.Provider>
  );
};

export default DocumentEventListenerProvider;
