import type { Character } from '../types/Character';

function CharactersCard({ character }: { character: Character }) {
  return (
    <li key={character.id} className="flex flex-col items-center">
        <h3>{character.name}</h3>
        <img src={character.image} alt={character.name} />
    </li>
  );
}

export default CharactersCard;