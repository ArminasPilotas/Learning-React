import clsx from "clsx";

const initialClasses =
  "outline-none p-1 border border-solid border-blue-400 rounded";

function Input({ className, ...props }) {
  const mergedClasses = clsx(initialClasses, className);

  return <input className={mergedClasses} {...props} />;
}

export default Input;
