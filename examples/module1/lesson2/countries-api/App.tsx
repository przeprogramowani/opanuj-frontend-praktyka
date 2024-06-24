import { useState } from 'react';
import CountryGuessContainer from './containers/CountryGuessContainer';
import CountrySearchContainer from './containers/CountrySearchContainer';

enum AppType {
  GUESSING = 'guessing',
  SEARCH = 'search',
}

function getAppType(appType: AppType) {
  switch (appType) {
    case AppType.SEARCH:
      return <CountrySearchContainer />;
    case AppType.GUESSING:
      return <CountryGuessContainer />;
    default:
      return <div>Error</div>;
  }
}

const App = () => {
  const [appType, setAppType] = useState(AppType.SEARCH);
  return (
    <div>
      <div className="flex">
        <button onClick={() => setAppType(AppType.SEARCH)}>Search</button>
        <button onClick={() => setAppType(AppType.GUESSING)}>Guess</button>
      </div>
      {getAppType(appType)}
    </div>
  );
};

export default App;
