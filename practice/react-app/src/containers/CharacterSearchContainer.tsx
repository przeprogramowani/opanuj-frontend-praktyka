import { useState } from 'react';
import CharacterList from '../components/molecules/CharacterList';
import SearchForm from '../components/molecules/SearchForm';
import SearchTitle from '../components/atoms/SearchTitle';
import { Character, GenderType } from '../types/Character';
import { useFetchData } from '../hooks/useFetchData';
import { sortData } from '../utils/Sort';
import { SortSearchOptions } from '../types/Sort';

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
      <SearchForm
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="pt-12" />
      {sortedCharacters && <CharacterList characters={sortedCharacters} />}
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
