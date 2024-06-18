import { useState } from 'react';
import './App.css';
import { useFetchCountries } from './hooks/useFetchCountries';
import { State } from './models/state';

function App() {
  const [countryName, setCountryName] = useState<string>('');
  const {
    countries,
    details: { capitals, countriesNames, currencies, languages },
    state,
    resetFilters
  } = useFetchCountries({ name: countryName });

  const searchByCountryName = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const countryName = event.target.value;
    setCountryName(countryName);
  };

  const reset = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    resetFilters();
    setCountryName("");
  }

  return (
    <main className="p-6 flex flex-col gap-4">
      {state === State.Error && <span>Wystąpił błąd</span>}
      {state === State.Loading && <span>Ładowanie...</span>}
      {state === State.Idle && <span>Wyszukaj państwo</span>}
      {state === State.Loaded && (
        <>
          <form className="flex items-center gap-4">
            <label className="flex gap-1">
              Nazwa państwa
              <select onChange={searchByCountryName}>
                <option value="">Wybierz państwo</option>
                {countriesNames.map((countryName) => (
                  <option key={countryName} value={countryName}>
                    {countryName}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex gap-1">
              Waluta
              <select>
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex gap-1">
              Język
              <select>
                {languages.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex gap-1">
              Stolica
              <select>
                {capitals.map((capital) => (
                  <option key={capital} value={capital}>
                    {capital}
                  </option>
                ))}
              </select>
            </label>
            <button onClick={reset}>Reset</button>
          </form>
          <ul className="flex gap-6 flex-wrap">
            {countries.map((country) => (
              <li
                key={country.name.common}
                className="flex flex-col items-center gap-2"
              >
                <span>{country.name.common}</span>
                <img
                  className="max-w-36"
                  src={country.flags.png}
                  alt={country.name.common}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}

export default App;
