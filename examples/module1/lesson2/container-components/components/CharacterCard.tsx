import { Character } from '../types/Character';

type CharacterCardProps = {
    character: Character;
};

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
    return (
        <li key={character.id} className="flex flex-col items-center">
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} />
        </li>
    );
};
