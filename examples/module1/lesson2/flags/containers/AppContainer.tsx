import { useState } from 'react';
import CharacterSearchContainer from './CharacterSearchContainer';
import GuessGameContainer from './GuessGameContainer';

function AppContainer() {
  const [chooseOption, setChooseOption] = useState<string>('asc');

  return (
    <>
      <div className="pt-20" />
      <select onChange={(e) => setChooseOption(e.target.value)}>
        <option value="asc">Wyszukiwarka</option>
        <option value="desc">Zgadywanka</option>
      </select>
      <div className="pt-12" />
      {chooseOption === 'asc' ? (
        <CharacterSearchContainer />
      ) : (
        <GuessGameContainer />
      )}
    </>
  );
}

export default AppContainer;
