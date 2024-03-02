import { Link } from "react-router-dom";

function Button({ children, disabled, to = "", type = "primary", onClick }) {
  const base =
    "inline rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed text-sm";

  const styles = {
    primary: base + " sm:px-6 sm:py-4 px-4 py-3",
    small: base + " px-3 py-2",
    secondary:
      " text-sm inline rounded-full font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed border-2 border-stone-300 sm:px-5.5 sm:py-3.5 px-3.5 py-2.5 hover:text-stone-600",
    round: base + " px-2.5 py-1 text-sm ",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
