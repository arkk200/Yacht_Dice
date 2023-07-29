import { useRef } from "react";

type EventListnerProps = <K extends string = keyof WindowEventMap>(
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

export const useWindowEvent = () => {
  const eventListenersRef = useRef<
    EventListenerInfo<string | keyof WindowEventMap>[]
  >([]);

  const addWindowEventListener: EventListnerProps = (
    key,
    type,
    listener,
    options
  ) => {
    console.log("addEvent");
    window.addEventListener(type, listener, options);
    eventListenersRef.current = [
      ...eventListenersRef.current,
      { key, type, listener, options },
    ];
  };

  const removeWindowEventListener = (key: string) => {
    eventListenersRef.current.forEach((eventListener) => {
      if (eventListener.key === key) {
        const { type, listener, options } = eventListener;
        window.removeEventListener(type, listener, options);
      }
    });
    eventListenersRef.current = eventListenersRef.current.filter(
      (eventListener) => eventListener.key !== key
    );
  };

  return {
    addWindowEventListener,
    removeWindowEventListener,
  };
};
