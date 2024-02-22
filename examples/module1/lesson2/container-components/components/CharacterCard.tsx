import { Character } from '../types/Character';

function CharacterCard({ character }: { character: Character }) {
  const { name, image } = character;
  return (
    <li className="flex flex-col items-center">
      <h3>{name}</h3>
      <img src={image} alt={name} />
    </li>
  );
}

export default CharacterCard;
