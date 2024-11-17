import type { Character } from '../types/Character';

export function CharacterCard({ character }: { character: Character }) {
  return (
    <>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
    </>
  );
}
