import { FormEvent, FormEventHandler, useState } from 'react';
import { formValidator } from './validator';

function Form() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    event: FormEvent
  ) => {
    event.preventDefault();
    const results = formValidator(firstName, lastName, age);
    setErrors(results);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="flex flex-col max-w-[200px] my-2" htmlFor="first-name">
        <span className="text-white">Imię</span>{' '}
        <input
          id="first-name"
          name="first-name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label className="flex flex-col max-w-[200px] my-2" htmlFor="last-name">
        <span className="text-white">Nazwisko</span>{' '}
        <input
          id="last-name"
          name="last-name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label className="flex flex-col max-w-[200px] my-2" htmlFor="age">
        <span className="text-white">Wiek</span>{' '}
        <input
          id="age"
          name="age"
          type="number"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value, 10))}
        />
      </label>

      <ul>
        {errors.map((error) => (
          <li className="text-red-400" key={error}>
            {error}
          </li>
        ))}
      </ul>

      <button
        type="submit"
        className="px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-300 mt-2"
      >
        Zapisz
      </button>
    </form>
  );
}

export default Form;
