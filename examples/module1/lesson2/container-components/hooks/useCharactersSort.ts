import React, { useEffect } from 'react'
import { Character } from '../types/Character';

export const useCharactersSort = (characters: Character[], sortOption: string) => {
  const [sortedCharacters, setSortedCharacters] = React.useState<Character[]>([]); 


  useEffect(() => {
    const sorted: Character[] = [...characters].sort((a, b) => {
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortOption === 'created') {
        return new Date(a.created).getTime() - new Date(b.created).getTime();
      }
  
      return 0;
    });

    setSortedCharacters(sorted);
  }, [characters, sortOption]);


  return { sortedCharacters }
}