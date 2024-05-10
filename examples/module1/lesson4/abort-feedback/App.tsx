// import { useEffect, useState } from 'react';
import { useEffect } from 'react';
import { useUsers } from './useUsesrs';

const App = () => {
  const { users, error, fetchUsers, retryRequest } = useUsers();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div className="flex flex-row items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <div className="flex flex-row items-center">
          {error && <p className="mr-2">{error}</p>}

          <button
            onClick={() => retryRequest()}
            className="text-blue-400 bg-blue-200 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4"
          >
            Try again
          </button>
        </div>
      </div>

      <ul className="space-y-2">
        {users.map((user, index) => (
          <li
            className="bg-white p-4 rounded-md border border-gray-100"
            key={index}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
