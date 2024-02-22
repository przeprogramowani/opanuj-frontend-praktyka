import { Character } from '../types/Character';

export const sortCharacters = (characters: Character[], sortOption: string) =>
  [...characters].sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'created') {
      return new Date(a.created).getTime() - new Date(b.created).getTime();
    }
    return 0;
  });
