import { Character } from '../types/Character';
import { CharacterCard } from './CharacterCard';

export function CharacterList({ characters }: { characters: Character[] }) {
  return (
    <ol className="grid grid-cols-1 gap-4 pt-12 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-16">
      {characters.map((character) => (
        <li key={character.id} className="flex flex-col items-center">
          <CharacterCard
            name={character.name}
            image={character.image}
            key={character.id}
          />
        </li>
      ))}
    </ol>
  );
}
