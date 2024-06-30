import React from 'react';

type InputProps = {
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ value, onChange } : InputProps) => (
    <input
        type="number"
        className="rounded-md shadow-md p-4"
        value={value}
        onChange={onChange}
    />
)
