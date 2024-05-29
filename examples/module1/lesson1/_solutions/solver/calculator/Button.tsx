import React from 'react';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
}: ButtonProps) => (
  <button
    className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
    onClick={onClick}
  >
    {children}
  </button>
);
