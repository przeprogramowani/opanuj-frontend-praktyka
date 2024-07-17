import { useEffect, useState } from "react"
import {useFetch} from '../hooks/useFetch';
import { getRandomElement } from "../utils/utils";

const REST_COUNTRIES_API = "https://restcountries.com/v3.1";

export function useCharacterSearch(name: string = "") {
  return useFetch(`${REST_COUNTRIES_API}/name/${name}/?status=true&fields=name,languages,capital,currencies,population,flag,flags`);
}

export function useCharacterRandom() {
  const [character, setCharacter] = useState(null);
  const { data } = useFetch(`${REST_COUNTRIES_API}/all/?status=true&fields=name,languages,capital,currencies,population,flag,flags`);

  const fetchNewCharacter = () => {
    data ? setCharacter(getRandomElement(data)) : null;
  };

  useEffect(() => {
    fetchNewCharacter()
  }, [data]);

  
  return {character, fetchNewCharacter};
}