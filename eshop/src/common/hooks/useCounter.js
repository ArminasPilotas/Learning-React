import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(1);

  function OnIncrement() {
    setCount((prevCount) => parseInt(prevCount + 1));
  }

  function onDecrement() {
    if (count === 1) {
      setCount(1);
    } else {
      setCount((prevCount) => parseInt(prevCount - 1));
    }
  }

  function onInput(event) {
    const val = event.target.valueAsNumber;
    if (isNaN(val)) {
      setCount(0);
    } else {
      setCount(event.target.valueAsNumber);
    }
  }

  return {
    count,
    OnIncrement,
    onDecrement,
    onInput,
  };
}

export default useCounter;
