import clsx from "clsx";
import { Link } from "react-router-dom";

const typeClassMap = {
  default: "text-blue-400 hover: bg-grey-100",
  primary: "bg-blue-400 text-white hover:bg-blue-500",
};

const disabledClasses = "cursor-default bg-gray-300 text-gray-400";
const initialClasses =
  "text-blue-400 hover: bg-grey-100 p-1 focus:outline-none rounded";

function Button({
  children,
  className,
  to,
  type = "default",
  disabled,
  onClick,
}) {
  if (to) {
    return (
      <Link
        to={to}
        className={clsx(
          initialClasses,
          disabled ? disabledClasses : typeClassMap[type],
          className
        )}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={clsx(initialClasses, className)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
