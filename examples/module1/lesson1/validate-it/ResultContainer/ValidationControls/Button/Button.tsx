import React from 'react';

type ButtonProps = {
  id: string;
  className: string;
  text: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ id, className, text, onClick }) => {
  return (
    <button
      className={className}
      id={id}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;