import { f1, f2, f3, f4 } from '../../functions';
import { useCalculate } from '../../hooks/UseCalculate';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';

export const Calculator = () => {
  const { numA, numB, numC, setNumA, setNumB, calcResult } = useCalculate();

  return (
    <>
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
        <Button operation="+" calcResult={() => calcResult(f1)} />
        <Button operation="-" calcResult={() => calcResult(f2)} />
        <Button operation="*" calcResult={() => calcResult(f3)} />
        <Button operation="/" calcResult={() => calcResult(f4)} />
      </div>
      <div>Result: {numC}</div>
    </>
  );
};
