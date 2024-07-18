import React from 'react';

const Input = ({ value, onChange }: { value: any; onChange: any }) => {
  return (
    <input
      type="number"
      className="rounded-md shadow-md p-4"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
