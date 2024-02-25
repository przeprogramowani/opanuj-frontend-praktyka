import './App.css';
import Radio from './components/atoms/Radio';
import { CountriesContainer } from './containers/CountriesContainer';
import { ModeType } from './types/filter';
import { UseCountriesContext } from './context/CountriesApiContext';
import { CountriesList } from './components/molecules/CountriesList';
import { CountryType } from './types/country';

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
      <CountriesContainer
        viewFn={(countries: CountryType[]) => (
          <CountriesList countries={countries} />
        )}
      />
    </div>
  );
}

export default App;
