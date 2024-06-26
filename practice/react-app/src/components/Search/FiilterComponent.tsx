import { ChangeEvent } from 'react';
import { FilterContextType } from '../../config/types';

const FilterFormComponent = ({
  filterProps,
}: {
  filterProps: FilterContextType;
}) => {
  const {
    countryName,
    setCountryName,
    sortByPopulation,
    setSortByPopulation,
    sortAlphabetically,
    setSortAlphabetically,
  } = filterProps;

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCountryName(e.target.value);
  };

  const sortByPopulationHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSortByPopulation(e.target.checked);
    if (sortAlphabetically) {
      setSortAlphabetically(false);
    }
  };

  const sortAlphabeticallyHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSortAlphabetically(e.target.checked);
    if (sortByPopulation) {
      setSortByPopulation(false);
    }
  };

  return (
    <form
      className="flex flex-row items-center justify-center gap-4 mb-8"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="w-[20rem] p-4 border border-gray-300 rounded-lg "
        type="text"
        placeholder="Search country"
        value={countryName}
        onChange={inputHandler}
      />

      <label htmlFor="sortByPopulation">
        <input
          className="mr-2"
          type="checkbox"
          name="sortByPopulation"
          id="sortByPopulation"
          checked={sortByPopulation}
          onChange={sortByPopulationHandler}
        />
        Sort by population
      </label>
      <label htmlFor="sortAlphabetically">
        <input
          className="mr-2"
          type="checkbox"
          name="sortAlphabetically"
          id="sortAlphabetically"
          checked={sortAlphabetically}
          onChange={sortAlphabeticallyHandler}
        />
        Sort alphabetically
      </label>
    </form>
  );
};

export default FilterFormComponent;
