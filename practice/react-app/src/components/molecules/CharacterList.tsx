import { memo } from 'react';
import { Character } from '../atoms/Character';

type CharacterListType = {
  characters: Character[];
};

export const CharacterList = memo<CharacterListType>(({ characters }) => {
  return (
    <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {characters.map((character) => (
        <Character {...character} />
      ))}
    </ol>
  );
});

export default CharacterList;
