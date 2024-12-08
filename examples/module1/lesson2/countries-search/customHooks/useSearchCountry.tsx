import { useState, useEffect } from 'react';
import type { ICountry } from '../types/Country';
import { sortByName, sortByPopulation } from '../utils/sorting';
import { API_FIELDS_SEARCH } from '../consts/api';

const useSearchCountry = (name: string) => {
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [sortBy, setSortBy] = useState('alphabetical');
    const [filterBy, setFilterBy] = useState('name');

    const fetchCountries = async () => {
        const endpoint = name ? `${filterBy}/${name}${API_FIELDS_SEARCH}` : `all${API_FIELDS_SEARCH}`;
        const response = await fetch(`https://restcountries.com/v3.1/${endpoint}`);
        
        if (!response.ok) {
            setCountries([]);
            throw new Error('Failed to fetch countries');
            return;
        } 

        const data: ICountry[] = await response.json();

        return data;
    }

    const sorting = (data: ICountry[]) => {
        const sortFn = sortBy === 'population' ? sortByPopulation : sortByName;
        return sortFn(data);
    }
    
    useEffect(() => {
       const fetchData = async () => {
            try {
                const data = await fetchCountries();

                if (data) {
                    setCountries(sorting(data));
                }
            } catch (error) {
                console.error(error);
            }
       }

       fetchData();
    }, [name, sortBy, filterBy]);

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