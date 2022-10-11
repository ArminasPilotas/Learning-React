import clsx from 'clsx';

function Card({ className, isRound, children }) {
  return <div className={clsx('bg-white', 'border', 'shadow', 'p-2', isRound && 'rounded', className)}>{children}</div>;
}

export default Card;
