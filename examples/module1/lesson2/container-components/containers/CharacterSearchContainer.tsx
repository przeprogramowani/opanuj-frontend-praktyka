import CharacterList from '../components/CharacterList';
import SearchForm from '../components/SearchForm';
import SearchTitle from '../components/SearchTitle';
import { useFetchCharacters } from '../hooks/useFetchCharacters';
import { useSortedCharacters } from '../hooks/useSortedCharacters';

const SEARCH_TITLE = 'Wyszukiwarka postaci Rick and Morty';

function CharacterSearchContainer() {
    const { name, setName, gender, setGender, characters } = useFetchCharacters();
    const { sortOption, setSortOption, sortedCharacters } = useSortedCharacters(characters);
    return (
        <>
            <div className="pt-20" />
            <SearchTitle title={SEARCH_TITLE} />
            <div className="pt-8" />
            <SearchForm
                name={name}
                setName={setName}
                gender={gender}
                setGender={setGender}
                sortOption={sortOption}
                setSortOption={setSortOption}
            />
            <div className="pt-12" />
            <CharacterList characters={sortedCharacters} />
            <div className="pt-16" />
        </>
    );
}

export default CharacterSearchContainer;
