import { ReactComponent as SpinIcon } from "../assets/spin.svg";
import useLoadingDots from "../hooks/useLoadingDots";

function Spinner({ text = "Loading" }) {
  const loadingDots = useLoadingDots();

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
