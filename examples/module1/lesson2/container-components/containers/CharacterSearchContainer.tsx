import { useState } from 'react';

import { CharacterList } from '../components/CharacterList';
import { SearchTitle } from '../components/SearchTitle';
import { SelectInput } from '../components/SelectInput';
import { TextInput } from '../components/TextInput';

import { useCharacterSearch } from '../hooks/useCharacterSearch';
import { useSortedCharacters } from '../hooks/useSortedCharacters';

export const CharacterSearchContainer = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const characters = useCharacterSearch(name, gender);

  const [sortOption, setSortOption] = useState('');
  const sortedCharacters = useSortedCharacters(characters, sortOption);

  return (
    <>
      <SearchTitle name="Rick and Morty" />
      <div className="flex items-end justify-center space-x-4">
        <TextInput
          label="Name"
          value={name}
          onChange={setName}
          placeholder="Rick Sanchez..."
        />
        <SelectInput
          label="Gender"
          value={gender}
          onChange={setGender}
          options={[
            { value: '', label: 'Any Gender' },
            { value: 'female', label: 'Female' },
            { value: 'male', label: 'Male' },
            { value: 'genderless', label: 'Genderless' },
            { value: 'unknown', label: 'Unknown' },
          ]}
        />
        <SelectInput
          label="Sort by"
          value={sortOption}
          onChange={setSortOption}
          options={[
            { value: '', label: 'Initial' },
            { value: 'name', label: 'Name' },
            { value: 'created', label: 'Created Date' },
          ]}
        />
      </div>
      <CharacterList characters={sortedCharacters} />
    </>
  );
};
