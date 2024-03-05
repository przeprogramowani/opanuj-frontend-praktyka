import React, { FC, ReactElement } from 'react';

type ButtonProps = {
  onClick: (event: React.MouseEvent) => void,
  children: string
};

const Button: FC<ButtonProps> = ({ onClick, children }): ReactElement => {
  return <button
    className='bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md'
    onClick={onClick}
  >
    {children}
  </button>;
};

export default Button;