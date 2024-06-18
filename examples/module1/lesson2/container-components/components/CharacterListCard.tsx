import { Character } from '../types/Character';

export const CharacterListCard = ({ character }: { character: Character }) => {
    const createdDate = new Date(character.created).toLocaleString();
  return (
    <li className="flex flex-col gap-1 items-center">
      <h3>{character.name}</h3>
      <span className="text-sm"> {createdDate} </span>
      <img src={character.image} alt={character.name} />
    </li>
  );
};
