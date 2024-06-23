import React, { useEffect } from 'react'
import { Country } from '../types/Country'

const useCountriesSearch = (name: string) => {
  const [countries, setCountries] = React.useState<Country[]>([])
  
  useEffect(() => {
    if (name) {
      fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(err => console.log(err))
    }
    
  }, [name])

  return { countries }
}

export default useCountriesSearch