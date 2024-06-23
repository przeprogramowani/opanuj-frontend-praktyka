import React from "react";
import { Character } from "../types/Character";

function CharacterCard({ character }: { character: Character }) {

  return (
    <li className="flex flex-col items-center">
          <h3>{character.name}</h3>
          <img src={character.image} alt={character.name} />
        </li>
  )
}

export default CharacterCard;