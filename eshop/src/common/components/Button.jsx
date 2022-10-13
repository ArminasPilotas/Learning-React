import clsx from "clsx";
import { Link } from "react-router-dom";

const defaultClasses =
  "text-blue-400 hover: bg-grey-100 p-1 focus:outline-none rounded";

function Button({ children, className, to, onClick }) {
  if (to) {
    return (
      <Link
        to={to}
        className={clsx(defaultClasses, className)}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  return (
    <button className={clsx(defaultClasses, className)} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
