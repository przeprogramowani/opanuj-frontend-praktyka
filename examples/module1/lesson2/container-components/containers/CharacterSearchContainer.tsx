import CharacterList from '../components/CharacterList';
import InputName from '../components/InputName';
import SearchTitle from '../components/SearchTitle';
import SelectGender from '../components/SelectGender';
import SelectSort from '../components/SelectSort';
import useSearchCharacter from '../hooks/useSearchCharacter';
import useSortCharacters from '../hooks/useSortCharacters';

function CharacterSearchContainer() {
  const { characters, gender, setGender, name, setName } = useSearchCharacter();
  const { setSortOption, sortOption, sortedCharacters } =
    useSortCharacters(characters);

  return (
    <>
      <div className="pt-20" />
      <SearchTitle title="Wyszukiwarka postaci Rick and Morty" />
      <div className="pt-8" />
      <form className="space-x-4 flex items-end justify-center">
        <InputName name={name} setName={setName} />
        <SelectGender gender={gender} setGender={setGender} />
        <SelectSort sortOption={sortOption} setSortOption={setSortOption} />
      </form>
      <div className="pt-12" />
      <CharacterList characters={sortedCharacters} />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
