import { useState } from 'react';
import { Character } from '../types/Character';

export const useSortedCharacters = (characters: Character[]) => {
    const [sortOption, setSortOption] = useState('');

    const sortedCharacters = [...characters].sort((a, b) => {
        if (sortOption === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortOption === 'created') {
            return new Date(a.created).getTime() - new Date(b.created).getTime();
        }
        return 0;
    });

    return { sortOption, setSortOption, sortedCharacters };
};
