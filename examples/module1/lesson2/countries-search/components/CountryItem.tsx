import type { ICountry } from '../types/Country';
import { formatNumberWithSpaces } from '../utils/formatNumber';
interface ICountryItem {
    country: ICountry;
}

const CountryItem = ({ country }: ICountryItem) => {
    const { name: { common }, population, capital, flags } = country;

    return (
        <div className="group relative" key={common}>
            <h2 className="text-xl font-medium" data-testid="country-name">{common}</h2>
            <img className="mt-2" src={flags.svg} alt={`${common} flag`} />
            <p className="mt-2">Population: <span data-testid="country-population">{formatNumberWithSpaces(population)}</span></p>
            <p className="mt-1">Capital: {capital}</p>
        </div>
    );
}

export default CountryItem;