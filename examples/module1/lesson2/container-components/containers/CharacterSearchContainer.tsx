import { useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchForm from '../components/SearchForm';
import SearchTitle from '../components/SearchTitle';
import { useCharacterSearch } from '../hooks/useCharactersSearch';
import { useCharactersSort } from '../hooks/useCharactersSort';

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const { characters } = useCharacterSearch(name, gender);
  const [sortOption, setSortOption] = useState('');
  const { sortedCharacters } = useCharactersSort(characters, sortOption);

  return (
    <>
      <div className='pt-20' />
      <SearchTitle />
      <div className='pt-8' />
      <SearchForm
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className='pt-12' />
      <CharacterList characters={sortedCharacters} />
      <div className='pt-16' />
    </>
  );
}

export default CharacterSearchContainer;
