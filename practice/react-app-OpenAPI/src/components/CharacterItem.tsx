import { Character } from '../api/api-client-generated';

const CharacterItem = ({ character }: { character: Character }) => {
  return (
    <li key={character.id} className="flex flex-col items-center">
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
    </li>
  );
};

export default CharacterItem;
