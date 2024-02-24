import { useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchTitle from '../components/SearchTitle';
import { useCharacterSearch } from '../hooks/useCharacterSearch';
import sortCharacters from '../utils/sortCharacter';
import GenderSelect from '../components/FormComponents/GenderSelect';
import NameInput from '../components/FormComponents/NameInput';
import SortSelect from '../components/FormComponents/SortSelect';

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [sortOption, setSortOption] = useState('');

  const characters = useCharacterSearch(name, gender);
  const sortedCharacters = sortCharacters(characters, sortOption);

  return (
    <>
      <div className="pt-20" />
      <SearchTitle />
      <div className="pt-8" />

      <form className="space-x-4 flex items-end justify-center">
        <NameInput name={name} setName={setName} />
        <GenderSelect gender={gender} setGender={setGender} />
        <SortSelect sortOption={sortOption} setSortOption={setSortOption} />
      </form>
      <div className="pt-12" />
      <CharacterList characters={sortedCharacters} />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
