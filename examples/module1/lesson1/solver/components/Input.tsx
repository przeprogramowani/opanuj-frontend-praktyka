import type { ChangeEvent } from 'react';

interface IInput {
    value: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({value, onChange}: IInput) => {
    return (
        <input
            type="number"
            className="rounded-md shadow-md p-4"
            value={value ?? 0}
            onChange={(e) => onChange(e)}
        />
    )
}

export default Input;