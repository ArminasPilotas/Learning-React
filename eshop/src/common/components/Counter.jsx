import Button from "./Button";

const btnClasses =
  "font-bold transform scale-125 hover:-translate-y-0.5 active:translate-y-0.5 transition";

function Counter({ className, count, onIncrement, onDecrement, onInput }) {
  return (
    <div className={className}>
      <Button className={btnClasses} onClick={onDecrement}>
        -
      </Button>
      <input
        className="outline-none p-2 w-10"
        type="number"
        value={count}
        onChange={onInput}
      />
      <Button className={btnClasses} onClick={onIncrement}>
        +
      </Button>
    </div>
  );
}

export default Counter;
