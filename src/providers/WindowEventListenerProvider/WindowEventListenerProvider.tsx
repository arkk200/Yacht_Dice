import { createContext, useMemo, useRef } from "react";
import ProviderProps from "../types/provider.types";

type WindowEventListener = <K extends string = keyof WindowEventMap>(
  key: string,
  type: K,
  listener: K extends keyof WindowEventMap
    ? (this: Window, ev: WindowEventMap[K]) => unknown
    : EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
) => unknown;

interface EventListenerInfo<K extends string = keyof WindowEventMap> {
  key: string;
  type: K;
  listener: K extends keyof WindowEventMap
    ? (this: Window, ev: WindowEventMap[K]) => unknown
    : EventListenerOrEventListenerObject;
  options?: boolean | AddEventListenerOptions;
}

export const WindowEventListenerContext = createContext<{
  addWindowEventListener: WindowEventListener;
  removeWindowEventListener: (key: string) => void;
} | null>(null);

const WindowEventListenerProvider = ({ children }: ProviderProps) => {
  const eventListenersRef = useRef<
    EventListenerInfo<string | keyof WindowEventMap>[]
  >([]);

  const actions = useMemo(
    (): {
      addWindowEventListener: WindowEventListener;
      removeWindowEventListener: (key: string) => void;
    } => ({
      addWindowEventListener: (key, type, listener, options) => {
        window.addEventListener(type, listener, options);
        eventListenersRef.current = [
          ...eventListenersRef.current,
          { key, type, listener, options },
        ];
      },
      removeWindowEventListener: (key: string) => {
        eventListenersRef.current = eventListenersRef.current.filter(
          (eventListener) => {
            if (eventListener.key === key) {
              const { type, listener, options } = eventListener;
              window.removeEventListener(type, listener, options);
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
    <WindowEventListenerContext.Provider value={actions}>
      {children}
    </WindowEventListenerContext.Provider>
  );
};

export default WindowEventListenerProvider;
