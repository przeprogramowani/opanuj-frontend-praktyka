import { useEffect, useState } from 'react';

type FetchDataType = {
  name: string;
  gender: string;
};

export const useFetchData = <T,>({ name, gender }: FetchDataType) => {
  const [characters, setCharacters] = useState<T[]>();
  const API_URL = `https://rickandmortyapi.com/api/character/?name=${name}&gender=${gender}`;

  useEffect(() => {
    if (name || gender) {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data: { results: T[] }) => setCharacters(data.results || []))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [name, gender, API_URL]);

  return { characters };
};
