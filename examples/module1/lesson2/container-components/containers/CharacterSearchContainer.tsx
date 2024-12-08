import { useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchForm from '../components/SearchForm/SearchForm';
import SearchTitle from '../components/SearchTitle';
import { sortCharacters } from '../utils/sortCharacters';
import useFetchSearchData from '../customHooks/useFetchSearchData';

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [sortOption, setSortOption] = useState('');

  const { characters } = useFetchSearchData(name, gender);
  const sortedCharacters = sortCharacters(sortOption, characters);

  return (
    <>
      <div className="pt-20" />
      <SearchTitle title="Rick and Morty" />
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
      <CharacterList characters={sortedCharacters} />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
