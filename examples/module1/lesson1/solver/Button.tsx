import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  id: string;
}

export const Button = ({children, onClick, id}:Props) => {
  return (
    <button
      key={id}
      className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  )
}