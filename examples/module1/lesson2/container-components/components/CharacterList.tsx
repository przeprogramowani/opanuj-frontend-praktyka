import type { Character } from '../types/Character';
import CharactersCard from './CharactersCard';

function CharacterList({ characters }: { characters: Character[] }) {
  return (
    <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {characters.map((character) => (
        <CharactersCard key={character.id} character={character} />
      ))}
    </ol>
  );
}

export default CharacterList;
