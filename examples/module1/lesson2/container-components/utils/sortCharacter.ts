import { Character } from "../types/Character";

const sortedCharacters = (characters: Character[], sortOption: string): Character[] => {
    return [...characters].sort((a, b) => {
        if (sortOption === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortOption === 'created') {
            return new Date(a.created).getTime() - new Date(b.created).getTime();
        }
        return 0;
    });
};

export default sortedCharacters;
