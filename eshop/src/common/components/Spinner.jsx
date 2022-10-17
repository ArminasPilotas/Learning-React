import { useEffect, useState } from "react";
import { ReactComponent as SpinIcon } from "../assets/spin.svg";

function Spinner({ text = "Loading" }) {
  const [loadingDots, setLoadingDots] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingDots((prev) => (prev === "..." ? "" : prev + "."));
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <SpinIcon />
      <div className="mt-1 font-semibold">
        <span>{text}</span>
        <span className="w-3">{loadingDots}</span>
      </div>
    </div>
  );
}

export default Spinner;
