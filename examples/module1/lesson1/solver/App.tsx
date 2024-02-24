import { ChangeEvent, useReducer, useState } from 'react';
import { initialState, reducer } from './functions';
import { ACTION } from './utils';

const actions = [
  { type: ACTION.ADD, label: '+' },
  { type: ACTION.SUB, label: '-' },
  { type: ACTION.MUL, label: '*' },
  { type: ACTION.DIV, label: '/' }
];

const App = () => {
  const [inputValues, setInputValues] = useState({
    firstNumber: 0,
    secondNumber: 0
  });
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValues(previousState => ({
      ...previousState,
      [e.target.name]: parseFloat(e.target.value)
    }));
  };

  return (
    <div>
      <div className='grid grid-cols-2 gap-x-4'>
        <div className='flex flex-col'>
          <input
            id='firstNumber'
            type='number'
            name='firstNumber'
            className='rounded-md shadow-md p-4'
            value={inputValues.firstNumber}
            onChange={handleInputChange}
          />
          <label htmlFor='firstNumber'>First number</label>
        </div>
        <div className='flex flex-col'>
          <input
            id='secondNumber'
            type='number'
            name='secondNumber'
            className='rounded-md shadow-md p-4'
            value={inputValues.secondNumber}
            onChange={handleInputChange}
          />
          <label htmlFor='firstNumber'>Second number</label>
        </div>
      </div>
      <div className='flex my-4 gap-x-4'>
        {actions.map((action, index) => (
          <button
            key={index}
            className='bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md flex-grow'
            onClick={() => dispatch({ type: action.type, payload: inputValues })}
            style={{ flexBasis: 0 }}
          >
            {action.label}
          </button>
        ))}
      </div>
      {state?.error ?
        <span className='flex items-center font-medium tracking-wide text-red-500 mt-1'>
			      {state?.error} </span>
        :
        <div>Result: {state.result}</div> }
    </div>
  );
};

export default App;
