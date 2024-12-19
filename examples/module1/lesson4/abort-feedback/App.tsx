import { useEffect, useRef, useState } from 'react';

interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=10000';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  const abortControllerRef = useRef<AbortController>(null);

  const fetchWithTimeout = (url: string, timeout: number, signal: any) => {
    return Promise.race([
      fetch(url, { signal }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout')), timeout)
      ),
    ])
  };

  const getUsersRequest = () => {
    setError(null);

    if (abortControllerRef.current) {
      abortControllerRef.current?.abort();
    }

    const newAbortController = new AbortController();

    abortControllerRef.current = newAbortController;

    const timeout = setTimeout(() => {
      setError('Sorry, there seems to be connectivity issues...');
    }, 5000)

    fetchWithTimeout(API_URL, 11000, newAbortController.signal)
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
        setError(null);
      }).catch((error) => {
        if (error.message === 'Timeout') {
          setError('Sorry, there seems to be connectivity issues...');
        }
      }).finally(() => {
        clearTimeout(timeout);
      });
  };

  useEffect(() => {
    getUsersRequest();
    return () => {
      // Cleanup function to abort any pending requests
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);
  

  return (
    <div>
      <div className="flex flex-row items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <div className="flex flex-row items-center">
          {error && <>
            <p className="mr-2">
              {error}
            </p>
            <button onClick={getUsersRequest} className="text-blue-400 bg-blue-200 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4">
              Try again
            </button>
          </>}
        </div>
      </div>
      <ul className="space-y-2">
        {users?.map((user, index) => (
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
