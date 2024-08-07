import { useEffect, useState } from 'react';
import { Country } from '../types/Country';

export function useRandomCountry(countries: Country[]) {
  const [randomIndex, setRandomIndex] = useState(0);
  const countriesLength = countries.length;

  function generateCountry() {
    setRandomIndex(Math.floor(Math.random() * (countriesLength + 1)));
  }

  useEffect(() => {
    generateCountry();
  }, [countries]);

  return { country: countries[randomIndex], generateCountry };
}
