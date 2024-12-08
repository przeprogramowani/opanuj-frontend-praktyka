import { useState, useEffect } from 'react';
import type { ICountry } from '../types/Country';
import { sortByName, sortByPopulation } from '../utils/sorting';
import { API_FIELDS_SEARCH } from '../consts/api';

const useSearchCountry = (name: string) => {
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [sortBy, setSortBy] = useState('alphabetical');
    const [filterBy, setFilterBy] = useState('name');
    
    useEffect(() => {
        const endpoint = name ? `${filterBy}/${name}${API_FIELDS_SEARCH}` : `all${API_FIELDS_SEARCH}`;
        fetch(
        `https://restcountries.com/v3.1/${endpoint}`
      )
        .then((response) => response.json())
        .then((data) => setCountries(sorting(data)))
        .catch((error) => {
            setCountries([]);
            console.error('Error fetching data:', error);
        });
    }, [name, sortBy, filterBy]);

    const sorting = (data: ICountry[]) => {
        const sortFn = sortBy === 'population' ? sortByPopulation : sortByName;
        return sortFn(data);
    }

    useEffect(() => {
        setCountries(sorting(countries));
    }, [sortBy]);

    return { 
        countries: countries ?? [],
        setCountries,
        sortBy,
        setSortBy,
        filterBy,
        setFilterBy,
    };
}

export default useSearchCountry;