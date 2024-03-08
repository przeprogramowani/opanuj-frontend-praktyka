import React from 'react';
interface CapitalFieldProps {
  setCapital: React.Dispatch<React.SetStateAction<string>>;
}
export const CapitalField = ({ setCapital }: CapitalFieldProps) => {
  return (
    <label className="flex flex-col" htmlFor="capital">
      Enter a capital city:
      <input
        id="capital"
        name="capital"
        type="text"
        onChange={(e) => setCapital(e.target.value)}
      />
    </label>
  );
};
