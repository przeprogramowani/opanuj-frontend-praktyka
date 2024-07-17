import { useState } from 'react';
import SearchForm from '../components/SearchForm';
import { useCharacterSearch } from '../hooks/useCharcterSearch';
import CharacterList from '../components/CharacterList';
import { sortByAlphabet, sortByPopulation } from '../utils/utils';

function CharacterSearchContainer() {
  const [name, setName] = useState<string>('');
  const [sort, setSort] = useState<boolean>(false);

  const {data, loading, error} = useCharacterSearch(name);

  return (
    <>
      <div className="pt-20" />
      <SearchForm
        name={name}
        setName={setName}
      />
      <label className="flex items-center space-x-3">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-600"
        checked={sort}
        onChange={() => setSort(!sort)}
      />
      <span className="text-gray-700">Sortowanie</span>
    </label>
      <div className="pt-12" />
      {name && (
        <div>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {Array.isArray(data) && (
            <div>
              <CharacterList characters={sort? sortByPopulation(data) : sortByAlphabet(data)} />
            </div>
          )}
        </div>
      )}
  
      
    </>
  );
}

export default CharacterSearchContainer;
