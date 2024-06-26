import { useState } from 'react';
import CharacterList from '../components/CharacterList';
import GenderSelect from '../components/GenderSelect';
import NameField from '../components/NameField';
import SearchTitle from '../components/SearchTitle';
import SortSelect from '../components/SortSelect';
import { useSearchCharacters } from '../hooks/useSearchCharacters';
import { sortCharacters } from '../lib/sortCharacters';

function CharacterSearchContainer() {
  const [name, setName] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('');

  const characters = useSearchCharacters({ name, gender });

  const sortedCharacters = sortCharacters(characters, sortOption);

  return (
    <>
      <div className="pt-20" />
      <SearchTitle />
      <div className="pt-8" />
      <form className="space-x-4 flex items-end justify-center">
        <NameField name={name} setName={setName} />
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
