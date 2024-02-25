import { useEffect, useState } from 'react';

// type FetchDataType = {
//   name: string;
// };

export const useFetchData = <T,>() => {
  const [countries, setCountries] = useState<T>();

  const API_ALL_COUNTRIES = 'https://restcountries.com/v3.1/all';
  // const API_COUNTRY = `https://restcountries.com/v3.1/name/${name}`;

  useEffect(() => {
    fetch(API_ALL_COUNTRIES)
      .then((response) => response.json())
      .then((data: T) => {
        setCountries(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return { countries };
};
