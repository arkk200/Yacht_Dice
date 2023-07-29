import { useRef } from "react";

type EventListnerProps = <K extends string = keyof DocumentEventMap>(
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

const useDocumentEvent = () => {
  const eventListenersRef = useRef<
    EventListenerInfo<string | keyof DocumentEventMap>[]
  >([]);

  const addDocumentEventListener: EventListnerProps = (
    key,
    type,
    listener,
    options
  ) => {
    console.log("addEvent");
    document.addEventListener(type, listener, options);
    eventListenersRef.current = [
      ...eventListenersRef.current,
      { key, type, listener, options },
    ];
  };

  const removeDocumentEventListener = (key: string) => {
    eventListenersRef.current.forEach((eventListener) => {
      if (eventListener.key === key) {
        const { type, listener, options } = eventListener;
        document.removeEventListener(type, listener, options);
      }
    });
    eventListenersRef.current = eventListenersRef.current.filter(
      (eventListener) => eventListener.key !== key
    );
  };

  return {
    addDocumentEventListener,
    removeDocumentEventListener,
  };
};

export default useDocumentEvent;
