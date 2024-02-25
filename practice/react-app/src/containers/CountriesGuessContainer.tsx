import Radio from '../components/atoms/Radio';
import { ModeType } from '../types/filter';

export const CountriesGuessContainer = () => {
  return (
    <div className="flex ml-auto mr-32">
      <Radio<ModeType>
        label="Search Mode"
        value="SEARCH"
        stateValue={mode}
        setStateValue={setMode}
      />
      <Radio<ModeType>
        label="Guess Mode"
        value="GUESS"
        stateValue={mode}
        setStateValue={setMode}
      />
    </div>
  );
};
