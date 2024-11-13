import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const SearchBar = () => {
  const { setSearchTerm, filterType } = useAppContext();
  const [input, setInput] = useState<string>('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(input.trim());
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-md">
      <input
        type="text"
        placeholder={`Search by ${filterType}...`}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </form>
  );
};

export default SearchBar;
