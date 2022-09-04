import { useState, useEffect } from "react";

function useWindowWidthSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowSize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowSize);

    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  return width;
}

export default useWindowWidthSize;
