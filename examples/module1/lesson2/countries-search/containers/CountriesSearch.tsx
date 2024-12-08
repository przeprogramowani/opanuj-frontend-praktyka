import { useState } from 'react';
import useSearchCountry from '../customHooks/useSearchCountry';
import SearchTitle from '../components/SearchTitle';
import SearchInput from '../components/SearchInput';
import { SELECT_SORT_BY_OPTIONS, SELECT_FILTER_BY_OPTIONS } from '../consts/selectOptions';
import SearchSelectForm from '../components/SearchSelectForm';
import CountriesLists from '../components/CountriesLists';

const CountriesSearch = () => {
    const [name, setName] = useState('');

    const { countries, sortBy, setSortBy, filterBy, setFilterBy } = useSearchCountry(name);

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