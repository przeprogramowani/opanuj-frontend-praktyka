import { useCountries } from '../hooks/useCountries';
import Country, { CountryComponentType } from '../components/Country';
import { useRandomCountry } from '../hooks/useRandomCountry';
import Guessing from '../components/Guessing';

function CountryGuessContainer() {
  const countries = useCountries();
  const { country, generateCountry } = useRandomCountry(countries);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3">
        <Country
          type={CountryComponentType.GUESSING}
          name={country?.name}
          flag={country?.flag}
          population={country?.population}
        />
      </div>

      <Guessing countryName={country?.name} />

      <button onClick={generateCountry}>Generate</button>
    </>
  );
}

export default CountryGuessContainer;
