import { useState } from 'react';
import useSearchCountry from '../customHooks/useSearchCountry';
import SearchTitle from '../components/SearchTitle';
import SearchInput from '../components/SearchInput';
import { sortByName } from '../utils/sorting';
import { SELECT_SORT_BY_OPTIONS, SELECT_FILTER_BY_OPTIONS } from '../consts/selectOptions';
import SearchSelectForm from '../components/SearchSelectForm';
import CountriesLists from '../components/CountriesLists';
import { filterByCapital, filterByCurrency, filterByLanguage } from '../utils/filtering';

const CountriesSearch = () => {
    const [name, setName] = useState('');
    const [currency, setCurrency] = useState('');
    const [language, setLanguage] = useState('');
    const [capital, setCapital] = useState('');

    const { countries, setCountries, sortBy, setSortBy, filterBy, setFilterBy } = useSearchCountry(name);

    const onFilterHandler = () => {
        const filteredByCur = filterByCurrency(countries, currency).length > 0 ? filterByCurrency(countries, currency) : countries;
        const filterdByLan = filterByLanguage(countries, language).length > 0  ? filterByLanguage(countries, language) : filteredByCur;
        const filteredByCapital = filterByCapital(countries, capital).length > 0 ? filterByCapital(countries, capital) : filterdByLan;

        const commonSearch = filteredByCur.filter(itemA =>
            filterdByLan.some(itemB => itemA.name.common === itemB.name.common) && 
            filteredByCapital.some(itemC => itemA.name.common === itemC.name.common)
        );

        return setCountries(sortByName(commonSearch));
    }

    const resetFilters = () => {
        setName('');
        setCurrency('');
        setLanguage('');
        setCapital('');
    }

    return (
        <div className="mt-6">
            <SearchTitle />
            <form className="mt-6 mb-6">
                <SearchInput label="Kraj" name="country" value={name} setValue={setName} placeholder={`Search by country's ${filterBy}...`}/>
                <div className="mt-6 w-full flex gap-4 content-center justify-items-center justify-self-center">
                    <SearchSelectForm title="Sort By:" value={sortBy} onChange={setSortBy} options={SELECT_SORT_BY_OPTIONS}/>
                    <SearchSelectForm title="Filter By:" value={filterBy} onChange={setFilterBy} options={SELECT_FILTER_BY_OPTIONS}/>    
                </div>
            </form>
            <CountriesLists countries={countries} />
        </div>
    )
}

export default CountriesSearch;