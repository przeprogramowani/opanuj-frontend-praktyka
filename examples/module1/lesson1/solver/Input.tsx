import React, { FC, ReactElement } from 'react';

type InputProps = {
  value: number,
  onChange: (a: number) => void
};

const Input: FC<InputProps> = ({ value, onChange }): ReactElement => {
  return <input
    type='number'
    className='rounded-md shadow-md p-4'
    value={value}
    onChange={(e) => onChange(parseFloat(e.target.value))}
  />;
};

export default Input;