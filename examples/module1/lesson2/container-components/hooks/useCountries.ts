import React, { useEffect } from 'react'
import { Country } from '../types/Country'

const useCountries = () => {
  const [countries, setCountries] = React.useState<Country[]>([])
  
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
    .then(response => response.json())
    .then(data => setCountries(data))
    .catch(err => console.log(err))
  }, [])

  return { countries }
}

export default useCountries