import { Button } from './Button.tsx';
import operations from './operations.ts';

type Props = {
  setResult: (result: number | string) => void
  x: number
  y: number
}

export const Operations = ({setResult, x, y}:Props) => {
  return (
    <div className="grid grid-cols-4 gap-x-4 my-4">
      {operations.map(({ execution, operator, name }) =>
        name === 'divide' ? (
          <Button id={name} key={name} onClick={() => {
            if (y === 0) {
              setResult('Cannot divide by 0')
            } else {
              setResult(execution(x, y))
            }
          }}>
            {operator}
          </Button>
        ) : (
          <Button id={name} key={name} onClick={() => {
            setResult(execution(x, y))
          }}>
            {operator}
          </Button>
        )
      )}
    </div>
  )
}