
import axios from 'axios';
import { useEffect, useState } from 'react'

interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=10000';

export const  useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [timeoutError, setTimeoutError] = useState<boolean>(false);

  const getUsers = () => 
    axios
      .get<{users: User[]}>(API_URL, { timeout: 5000 })
      .then((response) => {
        const { users } = response.data;
        
        setUsers(users);
      })
      .catch((error) => {
        if (error.code === 'ECONNABORTED') {
          setTimeoutError(true);
        }
      });
  

  const retryRequest = () => {
    setTimeoutError(false);
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  
  return { timeoutError, users, retryRequest };
}