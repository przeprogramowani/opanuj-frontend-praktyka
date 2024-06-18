import { useEffect, useState } from 'react';
import { Character } from '../../types/Character';
import { State } from '../../types/State';

export const useFetchCharacters = (name: string, gender: string): { characters: Character[], state: State } => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [state, setState] = useState<State>(State.idle);

  useEffect(() => {
    if (name || gender) {
      setState(State.loading);
      fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}&gender=${gender}`,
      )
        .then((response) => response.json())
        .then((data) => {
            setCharacters(data.results || []);
            setState(State.loaded);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            setState(State.error);
        });
    }
  }, [name, gender]);
  return {
    characters,
    state,
  };
};
