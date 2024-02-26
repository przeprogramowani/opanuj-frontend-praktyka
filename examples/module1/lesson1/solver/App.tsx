import { useState } from 'react';
import { Operations } from './Operations.tsx';

const App = () => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  let Props = {
    setResult: setResult,
    x: x,
    y: y
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={x}
          onChange={(e) => setX(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={y}
          onChange={(e) => setY(parseFloat(e.target.value))}
        />
      </div>
      {/* Error handling for dividing by 0 is inside the component below */}
      <Operations {...Props} />
      <div>Result: {result}</div>
    </div>
  );
};

export default App;
