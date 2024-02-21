import { Character } from '../types/Character';

function CharacterList({ characters }: { characters: Character[] }) {
  return (
    <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {characters.map((character) => (
        <li key={character.id} className="flex flex-col items-center">
          <h3>{character.name}</h3>
          <img src={character.image} alt={character.name} />
        </li>
      ))}
    </ol>
  );
}

export default CharacterList;
