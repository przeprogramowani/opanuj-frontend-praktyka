import React, { useEffect, useState } from 'react';
import { set } from 'zod';

interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=10000';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [connectivityIssues, setConnectivityIssues] = useState(false);
  const [fetchAgain, setFetchAgain] = useState(false);
  const [abortController, setAbortController] =
    useState<AbortController | null>(null);

  const fetchWithTimeout = (url: string, timeout: number = 5000) => {
    const controller = new AbortController();
    setAbortController(controller);
    return Promise.race([
      fetch(url, {
        signal: controller.signal,
      }),
      new Promise((_) =>
        setTimeout(() => {
          setConnectivityIssues(true);
        }, timeout)
      ),
    ]);
  };

  function onFetchAgain() {
    if (abortController) {
      abortController.abort();
    }
    setUsers([]);
    setFetchAgain((prev) => !prev);
    setConnectivityIssues(false);
  }

  useEffect(() => {
    fetchWithTimeout(API_URL, 5000)
      .then((res) => res.json())
      .then(({ users }) => {
        setUsers(users);
        setConnectivityIssues(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [fetchAgain]);

  return (
    <div>
      <div className="flex flex-row items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <div className="flex flex-row items-center">
          {connectivityIssues && (
            <>
              <p className="mr-2">
                Sorry, there seems to be connectivity issues...
              </p>
              <button
                onClick={onFetchAgain}
                className="text-blue-400 bg-blue-200 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4"
              >
                Try again
              </button>
            </>
          )}
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
