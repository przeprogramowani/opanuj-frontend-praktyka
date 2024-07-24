import { Character } from '../types/Character';
import CharacterItem from './CharacterItem';

function CharacterList({ characters }: { characters: Character[] }) {
  return (
    <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {characters.map((character) => (
        <CharacterItem character={character} key={character.id} />
      ))}
    </ol>
  );
}

export default CharacterList;
