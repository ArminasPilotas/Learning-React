import { useState } from "react";

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
      <button onClick={handleDecrement}>-</button>
      <input type="number" value={count} onChange={handleInput} />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Counter;
