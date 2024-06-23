import React from 'react';
import { Character } from '../types/Character';

export const CharacterItem = ({ character }: { character: Character }) => {
  return (
    <li key={character.id} className='flex flex-col items-center'>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
    </li>
  );
};
