import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=10000';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWithTimeout = (url: string, timeout: number) => {
    return Promise.race([
      fetch(url),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout')), timeout)
      ),
    ]);
  };

  const fetchData = async () => {
    setLoading(true);
    setError(''); // Resetujemy komunikat błędu przy nowym zapytaniu
    try {
      const response = (await fetchWithTimeout(API_URL, 5000)) as Response;
      const data = await response.json();
      setUsers(data.users);
      setError('success');
    } catch (error) {
      console.error(error);
      setError('error'); // Ustawienie błędu w przypadku problemów
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex flex-row items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <div className="flex flex-row items-center">
          {loading && <p>Loading...</p>} {/* Komunikat ładowania */}
          {error === 'error' && (
            <div className="flex flex-row items-center">
              <p className="mr-2">
                Sorry, there seems to be connectivity issues...
              </p>
              <button
                onClick={fetchData}
                className="text-blue-400 bg-blue-200 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4"
              >
                Try again
              </button>
            </div>
          )}
          {error === 'success' && (
            <ul className="space-y-2">
              {users.map((user) => (
                <li
                  className="bg-white p-4 rounded-md border border-gray-100"
                  key={user.id}
                >
                  {user.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
