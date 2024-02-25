import './App.css';
import Radio from './components/atoms/Radio';
import { CountriesSearchContainer } from './containers/CountriesSearchContainer';
import { ModeType } from './types/filter';
import { UseCountriesContext } from './context/CountriesApiContext';
import { CountriesList } from './components/molecules/CountriesList';
import { CountryType } from './types/country';
import { Country } from './components/Country';
import { CountriesGuessContainer } from './containers/CountriesGuessContainer';

function App() {
  const { mode, setMode } = UseCountriesContext();

  return (
    <div>
      <div className="flex ml-auto mr-32">
        <Radio<ModeType>
          label="Search Mode"
          value="SEARCH"
          stateValue={mode}
          setStateValue={setMode}
        />
        <Radio<ModeType>
          label="Guess Mode"
          value="GUESS"
          stateValue={mode}
          setStateValue={setMode}
        />
      </div>
      {mode === 'SEARCH' && (
        <CountriesSearchContainer
          viewFn={(countries: CountryType[]) => (
            <CountriesList countries={countries} />
          )}
        />
      )}
      {mode == 'GUESS' && (
        <CountriesGuessContainer
          viewFn={({ flagsData }: CountryType) => (
            <Country name="" flagData={flagsData} />
          )}
        />
      )}
    </div>
  );
}

export default App;
