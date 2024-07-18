import React from 'react';

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
    >
      {children}
    </button>
  );
};

export default Button;
