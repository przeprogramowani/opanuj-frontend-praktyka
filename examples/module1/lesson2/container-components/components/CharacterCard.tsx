import { Character } from '../types/Character';

const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <li key={character.id} className="flex flex-col items-center">
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
    </li>
  );
};

export default CharacterCard;
