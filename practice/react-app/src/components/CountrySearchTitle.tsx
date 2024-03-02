import { useState } from 'react';

export const CountrySearchTitle = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <h1 className="text-2xl">Wyszukiwarka krajów: {name}</h1>
      <div className="pt-8" />

    </div>
  );
};