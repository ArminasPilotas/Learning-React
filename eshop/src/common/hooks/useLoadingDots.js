import { useEffect, useState } from "react";

function useLoadingDots() {
  const [loadingDots, setLoadingDots] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingDots((prev) => (prev === "..." ? "" : prev + "."));
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return loadingDots;
}

export default useLoadingDots;
