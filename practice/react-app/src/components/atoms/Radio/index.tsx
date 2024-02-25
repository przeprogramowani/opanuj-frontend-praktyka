import React from 'react';
import { Dispatch, SetStateAction } from 'react';

type RadioType<T extends string> = {
  label: string;
  value: T;
  stateValue: T;
  setStateValue: Dispatch<SetStateAction<T>>;
};

function Radio<T extends string>({
  value,
  stateValue,
  label,
  setStateValue,
}: RadioType<T>) {
  return (
    <label className="flex flex-col mx-4">
      {label}
      <input
        className="border h-7 mt-1 indent-2"
        type="radio"
        value={value}
        onChange={(e) => setStateValue(e.target.value as SetStateAction<T>)}
        checked={stateValue === value}
      />
    </label>
  );
}

export default React.memo(Radio) as typeof Radio;
