import React from 'react';

type ButtonProps = {
  className: string;
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} type='button'>
      {children}
    </button>
  );
};
