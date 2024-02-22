import { f1, f2, f3, f4 } from './functions';

import './App.css';
import { Button } from './components/atoms/Button';
import { useCalculate } from './hooks/UseCalculate';
import { Input } from './components/atoms/Input';
const App = () => {
  const { numA, numB, numC, setNumA, setNumB, doWork } = useCalculate();

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <Input
          value={numA}
          parseFunck={(e) => setNumA(parseFloat(e.target.value))}
        />
        <Input
          value={numB}
          parseFunck={(e) => setNumB(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button operation="+" doWork={() => doWork(f1)} />
        <Button operation="-" doWork={() => doWork(f2)} />
        <Button operation="*" doWork={() => doWork(f3)} />
        <Button operation="/" doWork={() => doWork(f4)} />
      </div>
      <div>Result: {numC}</div>
    </div>
  );
};

export default App;
