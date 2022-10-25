import { useEffect, useRef } from "react";
import clsx from "clsx";

const initialClasses =
  "outline-none p-1 border border-solid border-blue-400 rounded";

function Input({ shouldFocus = false, className, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    if (shouldFocus) {
      ref.current.focus();
    }
  }, [ref, shouldFocus]);

  const mergedClasses = clsx(initialClasses, className);

  return <input ref={ref} className={mergedClasses} {...props} />;
}

export default Input;
