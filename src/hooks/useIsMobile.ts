import { useState, useEffect } from "react";

interface WindowSize {
  width: number;
  height: number;
}

const MOBILE_MAX_SIZE = 768;

const useIsMobile = (): boolean => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = (): void => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowSize.width < MOBILE_MAX_SIZE;
};

export default useIsMobile;
