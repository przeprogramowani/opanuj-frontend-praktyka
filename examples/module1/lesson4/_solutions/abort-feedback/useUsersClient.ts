import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = '/api/data/users?timeout=10000';

interface User {
  id: number;
  name: string;
}

export function useUsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [isTimeoutError, setIsTimeoutError] = useState(false);

  function fetchUsers() {
    axios
      .get<User[]>(API_URL, { timeout: 5000 })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        if (error.code === 'ECONNABORTED') {
          setIsTimeoutError(true);
        }
      });
  }

  function retryRequest() {
    setIsTimeoutError(false);
    fetchUsers();
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, isTimeoutError, retryRequest };
}
