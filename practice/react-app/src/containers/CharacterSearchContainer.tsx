import { useState } from 'react';
import CharacterList from '../components/molecules/CharacterList';
import SearchTitle from '../components/atoms/SearchTitle';
import { Character, GenderType } from '../types/Character';
import { useFetchData } from '../hooks/useFetchData';
import { sortData } from '../utils/Sort';
import { SortSearchOptions } from '../types/Sort';
import { Input } from '../components/atoms/Input';
import { Select } from '../components/atoms/Select';

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState<GenderType>('unknown');
  const [sortOption, setSortOption] = useState<SortSearchOptions>('initial');

  const { characters } = useFetchData<Character>({ name, gender });

  const sortedCharacters = sortData<Character>({ characters, sortOption });

  return (
    <>
      <div className="pt-20" />
      <SearchTitle title="Wyszukiwarka postaci Rick and Morty" />
      <div className="pt-8" />
      <form className="space-x-4 flex items-end justify-center">
        <Input
          label="Name"
          type="text"
          placeholder="Rick Sanchez..."
          name={name}
          setName={setName}
        />
        <Select<GenderType>
          value={gender}
          label="Gender"
          setGender={setGender}
          options={['female', 'genderless', 'male', 'unknown']}
        />
        <Select<SortSearchOptions>
          value={sortOption}
          label="Sort by"
          setGender={setSortOption}
          options={['created', 'name']}
        />
      </form>
      <div className="pt-12" />
      {sortedCharacters && <CharacterList characters={sortedCharacters} />}
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
