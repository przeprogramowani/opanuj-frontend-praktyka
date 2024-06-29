import { useState } from 'react';
import { CharacterList } from '../components/CharacterList';
import { SearchForm } from '../components/SearchForm';
import { SearchTitle } from '../components/SearchTitle';
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
      <SearchTitle title="Wyszukiwarka postaci Rick and Morty" />
      <SearchForm
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <CharacterList characters={sortedCharacters} />
    </>
  );
};
