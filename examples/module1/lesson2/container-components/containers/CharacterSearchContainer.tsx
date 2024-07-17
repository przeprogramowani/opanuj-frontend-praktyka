import { useEffect, useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchForm from '../components/SearchForm';
import SearchTitle from '../components/SearchTitle';
import { useCharacterSearch } from '../hooks/useCharcterSearch';

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const characters = useCharacterSearch(name, gender);
  const [sortOption, setSortOption] = useState('');

  
  const sortedCharacters = [...characters].sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'created') {
      return new Date(a.created).getTime() - new Date(b.created).getTime();
    }
    return 0;
  });

  return (
    <>
      <div className="pt-20" />
      <SearchTitle />
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
