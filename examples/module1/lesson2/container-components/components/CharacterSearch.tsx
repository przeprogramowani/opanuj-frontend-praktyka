import { useEffect, useState } from "react";
import {Character} from "../types/Character";
import { sortCharacters } from "./SortedCharacters";

function CharacterSearch(name: string, gender: string){
  const [characters, setCharacters] = useState<Character[]>([]);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const genderParam = gender ? `&gender=${gender}` : "";
    const url = `https://rickandmortyapi.com/api/character/?name=${name}${genderParam}`;

    if(name || gender || !name && !gender) {
      fetch(url)
        .then(response => response.json())
        .then(data => setCharacters(data.results || []))
        .catch(error => console.error(`Error fetching data: ", ${error}`))
    }
  }, [name, gender]);

  const sortedCharacters = sortCharacters(characters, sortOption);

  return { sortedCharacters, sortOption, setSortOption };
}

export default CharacterSearch;