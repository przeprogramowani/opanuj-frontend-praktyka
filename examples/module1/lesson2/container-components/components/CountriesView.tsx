type CountriesViewProps = {
  countryView: string;
  setCountryView: (countryView: string) => void;
};

const CountriesView = ({ countryView, setCountryView }: CountriesViewProps) => {
  return (
    <div className='flex flex-col'>
      Countries View
      <label htmlFor='Search'>
        <input
          id='Search'
          checked={countryView === 'Search'}
          name='viewType'
          type='radio'
          value='Search'
          onChange={(e) => setCountryView(e.target.value)}
        />{' '}
        Search
      </label>
      <label htmlFor='Guess'>
        <input
          id='Guess'
          checked={countryView === 'Guess'}
          name='viewType'
          type='radio'
          value='Guess'
          onChange={(e) => setCountryView(e.target.value)}
        />{' '}
        Guess
      </label>
    </div>
  );
};

export default CountriesView;
