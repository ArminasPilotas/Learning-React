import { useState } from "react";
import Button from "./Button";

const btnClasses =
  "font-bold transform scale-125 hover:-translate-y-0.5 active:translate-y-0.5 transition";

function Counter({ className }) {
  const [count, setCount] = useState(1);

  function handleIncrement() {
    setCount((prevCount) => parseInt(prevCount + 1));
  }

  function handleDecrement() {
    if (count === 1) {
      setCount(1);
    } else {
      setCount((prevCount) => parseInt(prevCount - 1));
    }
  }

  function handleInput(event) {
    const val = event.target.valueAsNumber;
    if (isNaN(val)) {
      setCount(0);
    } else {
      setCount(event.target.valueAsNumber);
    }
  }

  return (
    <div className={className}>
      <Button className={btnClasses} onClick={handleDecrement}>
        -
      </Button>
      <input
        className="outline-none p-2 w-10"
        type="number"
        value={count}
        onChange={handleInput}
      />
      <Button className={btnClasses} onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
}

export default Counter;
