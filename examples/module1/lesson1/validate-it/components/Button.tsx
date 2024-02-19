import { PropsWithChildren } from 'react';

interface ButtonProps {
  id: string;
  className?: string;
  onClick: () => void;
}

export function Button({
  id,
  children,
  className = '',
  onClick,
}: ButtonProps & PropsWithChildren) {
  return (
    <button
      className={`rounded-md text-lg hover:text-white p-4 mt-4 ${className}`}
      id={id}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
