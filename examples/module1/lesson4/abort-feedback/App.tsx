import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=10000';

const getNotificationAboutTimeout = (
  message: string,
  timeoutInMs: number,
): Promise<string> => {
  let timeout: NodeJS.Timeout;
  return new Promise<string>((resolve) => {
    timeout = setTimeout(() => resolve(message), timeoutInMs);
  }).finally(() => clearTimeout(timeout));
};

const CONNECTIVITY_PROBLEM_MESSAGE = 'CONNECTIVITY_PROBLEM_MESSAGE';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [connectivityProblem, setConnectivityProblem] = useState(false);

  let abortController: AbortController | undefined;

  const loadUsers = async () => {
    if (abortController) {
      abortController.abort();
    }
    abortController = new AbortController();

    const connectivityProblem: string | void = await Promise.race([
      fetch(API_URL, { signal: abortController.signal })
        .then((res) => res.json())
        .then(({ users }) => {
          setUsers(users);
          setConnectivityProblem(false);
        }),
      getNotificationAboutTimeout(CONNECTIVITY_PROBLEM_MESSAGE, 5000),
    ]);
    if (connectivityProblem === CONNECTIVITY_PROBLEM_MESSAGE) {
      setConnectivityProblem(true);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <div className="flex flex-row items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <div className="flex flex-row items-center">
          {connectivityProblem && (
            <p className="mr-2">
              Sorry, there seems to be connectivity issues...
            </p>
          )}
          <button
            className="text-white bg-blue-800 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4"
            onClick={loadUsers}
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
