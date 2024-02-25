import { memo, useState } from 'react';
import { Input } from '../atoms/Input';

// type SearchFormType = {};

export const GuessForm = memo(() => {
  const [answer, setAnswer] = useState('');
  return (
    <form className="flex items-center justify-center">
      <Input
        label="What is your answer ?"
        type="text"
        placeholder="Country"
        name={answer}
        setName={setAnswer}
      />
    </form>
  );
});
