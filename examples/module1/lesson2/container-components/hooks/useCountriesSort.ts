import React, { useEffect } from 'react'
import { Country } from '../types/Country';

const useCountriesSort = ({countries, sortOption}: {countries: Country[], sortOption: string}) => {
  const [sortedCountries, setSortedCountries] = React.useState<Country[]>([]);

  useEffect(() => {
    const sortedCountries: Country[] = [...countries].sort((a, b) => {
      if (sortOption === 'name') {
        return a.name.common.localeCompare(b.name.common)
      } else if (sortOption === 'population') {
        return a.population! - b.population!
      }

      return 0
    })

      setSortedCountries(sortedCountries);
  }, [countries, sortOption]);

  return { sortedCountries };

}

export default useCountriesSort