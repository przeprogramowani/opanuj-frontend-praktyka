import { Character } from '../types/Character';
import { CharacterCard } from './CharacterCard';

type CharacterListProps = {
    characters: Character[];
};

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
    return (
        <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {characters.map(character => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </ol>
    );
};

export default CharacterList;
