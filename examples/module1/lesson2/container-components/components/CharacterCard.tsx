import { Character } from '../types/Character';

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({
  character: { id, name, image },
}: CharacterCardProps) {
  return (
    <li key={id} className="flex flex-col items-center">
      <h3>{name}</h3>
      <img src={image} alt={name} />
    </li>
  );
}

export default CharacterCard;
