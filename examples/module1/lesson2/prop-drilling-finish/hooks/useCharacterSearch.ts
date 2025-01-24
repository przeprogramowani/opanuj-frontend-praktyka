import { useEffect, useState } from 'react';
import type { Character } from '../api-client-generated/models/Character';
import { DefaultApi } from '../api-client-generated';

export default function useCharacterSearch(name: string, gender: string, page: number) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const api = new DefaultApi();
    api.getCharacters({ name, gender, page }).then((response) => {
      setCharacters(response.results || []);
      setTotalPages(response.info?.pages || 0); // Assuming response.info.pages contains the total number of pages
    });
  }, [name, gender, page]);

  return { characters, totalPages };
}
