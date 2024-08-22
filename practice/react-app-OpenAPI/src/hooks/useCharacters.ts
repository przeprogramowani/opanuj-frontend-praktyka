import { useEffect, useState } from 'react';
import { Character } from '../api/api-client-generated';
import { DefaultApi, CharacterOrigin } from '../api/api-client-generated';

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const api = new DefaultApi();
    api.getCharacter().then((response) => {
      setCharacters(response.results!);
    });
  }, []);
}
