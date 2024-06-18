import { useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchTitle from '../components/SearchTitle';
import { useFetchCharacters } from './hooks/useFetchCharacters';
import { State } from '../types/State';
import { NameField } from '../../prop-drilling-finish/components/NameField';
import { GenderSelect } from '../components/GenderSelect';
import { SortSelect } from '../components/SortSelect';
import { sortCharacters } from './utils/sortCharacters';

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [sortOption, setSortOption] = useState('');
  const { characters, state } = useFetchCharacters(name, gender);

  const sortedCharacters = sortCharacters(characters, sortOption);

  return (
    <main className='flex flex-col gap-4 p-6'>
      <SearchTitle title="Wyszukiwarka postaci Rick and Morty" />
      <form className="space-x-4 flex items-end justify-center">
        <NameField name={name} setName={setName} />
        <GenderSelect gender={gender} setGender={setGender} />
        <SortSelect sortOption={sortOption} setSortOption={setSortOption} />
      </form>
      {
        state === State.loading && <p className='text-center'>Ładowanie...</p>
      }
      {
        state === State.error && <p className='text-center'>Wystąpił błąd podczas ładowania danych</p>
      }
      {
        state === State.loaded && characters.length > 0 && <CharacterList characters={sortedCharacters} />
      }
    </main>
  );
}

export default CharacterSearchContainer;
