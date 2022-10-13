import { useState } from "react";
import Button from "./Button";

const btnClasses =
  "font-bold transform scale-125 hover:-translate-y-0.5 active:translate-y-0.5 transition";

function Counter() {
  const [count, setCount] = useState(1);

  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function handleInput(event) {
    setCount(event.target.valueAsNumber);
  }

  return (
    <div>
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
