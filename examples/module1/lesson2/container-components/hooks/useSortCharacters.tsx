import { useEffect, useState } from "react";
import type { Character } from '../types/Character';

export default function useSortCharacters(characters: Character[]) {
  const [sortedCharacters, setSortedCharacters] = useState<Character[]>(characters || []);
  const [sortOption, setSortOption] = useState<'name' | 'created' | ''>('');

  useEffect(() => {
    const sorted = characters ? [...characters].sort((a, b) => {
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortOption === 'created') {
        return new Date(a.created).getTime() - new Date(b.created).getTime();
      }
      return 0;
    }) : [];
    setSortedCharacters(sorted);
  }, [sortOption, characters]);

  return {
    sortedCharacters,
    setSortOption,
    sortOption
  }
}