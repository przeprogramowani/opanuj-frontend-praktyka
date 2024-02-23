import { useState } from 'react';
import ResultContainer from './ResultContainer/ResultContainer.tsx';

const App = () => {
  const [numToVal, setNumToVal] = useState<string>('0');
  const [result, setResult] = useState<string>('');

  return (
    <ResultContainer numToVal={numToVal} setNumToVal={setNumToVal} result={result} setResult={setResult} />
  );
};

export default App;