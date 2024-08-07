import { useEffect, useState } from 'react';

interface CountryApi {
  flags: { png: string };
  name: { common: string };
  population: number;
}

interface Country {
  flag: string;
  name: string;
  population: number;
}

export function useCountries(currency?: string) {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/${
      currency ? 'currency/' + currency : 'all'
    }`;

    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        setCountries(
          data.map(({ flags, name, population }: CountryApi) => ({
            flag: flags.png,
            name: name.common,
            population,
          }))
        )
      )
      .catch((error) => console.log(`Error: ${error}`));
  }, [currency]);

  return countries;
}
