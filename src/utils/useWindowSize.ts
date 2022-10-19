import { useEffect, useState } from "react";

interface WindowSize {
  width: number;
  height: number;
}

function useWindowSize() {
  const isSSR = typeof window !== "undefined";

  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: isSSR ? 1366 : window.innerWidth,
    height: isSSR ? 768 : window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
