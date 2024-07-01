import { useEffect, useState, useCallback } from 'react';
import { User } from './types/User';
import { Header } from './components/Header';
import { UserList } from './components/UserList';

const API_URL = '/api/data/users?timeout=10000';
const TIMEOUT = 5000;
const MESSAGE_TIMEOUT = 'Sorry, there seems to be connectivity issues...';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [timeoutMessage, setTimeoutMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const fetchWithTimeout = (url: string, timeout: number) =>
    Promise.race([
      fetch(url),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout')), timeout)
      ),
    ]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setTimeoutMessage('');

    try {
      const response = await fetchWithTimeout(API_URL, TIMEOUT) as Response;
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error(`${MESSAGE_TIMEOUT} ${error}`);
      setTimeoutMessage(MESSAGE_TIMEOUT);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <Header
        loading={loading}
        timeoutMessage={timeoutMessage}
        onRetry={fetchUsers}
      />
      <UserList users={users} />
    </div>
  );
};

export default App;
