import { useEffect, useState } from "react";

const useIsWindowFlattened = () => {
  const [isWindowFlattened, setIsWindowFlattened] = useState(false);

  useEffect(() => {
    const onResizeWindow = () => {
      if (window.innerWidth / window.innerHeight > 1920 / 1080) {
        setIsWindowFlattened(true);
      } else {
        setIsWindowFlattened(false);
      }
    };
    window.addEventListener("resize", onResizeWindow);

    return () => window.removeEventListener("resize", onResizeWindow);
  }, []);

  return { isWindowFlattened };
};

export default useIsWindowFlattened;
