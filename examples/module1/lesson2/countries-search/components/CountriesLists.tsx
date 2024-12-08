import { useState } from 'react';
import { RECORDS_PER_PAGE } from '../consts/countries';
import type { ICountry } from '../types/Country';
import CountryItem from './CountryItem';
import Pagintaion from './Pagination';

interface ICountriesLists {
    countries: ICountry[];
}

const CountriesLists = ({ countries }: ICountriesLists) => {
    const [series, setSeries] = useState(1);

    return (
        <>
            <div style={{height: '685px'}} className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 overflow-hidden">
                {countries.length > 0 ? countries.map((country: ICountry, i: number) => (
                    i >= RECORDS_PER_PAGE * (series - 1) && i < (RECORDS_PER_PAGE) * series && <CountryItem key={country.name.common} country={country} />
                )) : <p>No countries found</p>}
            </div>
            <Pagintaion callback={setSeries} records={countries.length} recordsPerPage={RECORDS_PER_PAGE}/>
        </>
    )
}

export default CountriesLists;