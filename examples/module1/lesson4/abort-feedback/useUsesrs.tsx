import { useRef, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { TIMEOUT_ERROR_MSG, isAxiosTimeoutAbort } from './axiosValidators';

type FetchUsersOptions = {
  timeout?: number;
};

const API_URL = '/api/data/users?timeout=10000';
const DEFAULT_TIMEOUT = 5000;

export const useUsers = () => {
  const controllerRef = useRef<AbortController | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function fetchUsers(options?: FetchUsersOptions) {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();

    try {
      const {
        data: { users },
      } = await axios.get(API_URL, {
        signal: controllerRef.current.signal,
        timeout: options?.timeout ?? DEFAULT_TIMEOUT,
      });

      controllerRef.current = null;
      setError(null);
      setUsers(users);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (isAxiosTimeoutAbort(error)) {
          setError(TIMEOUT_ERROR_MSG);
        }
      }

      if (error instanceof Error) {
        console.log(error);
      }
    }
  }

  function retryFetchUsers() {
    setError(null);
    fetchUsers({ timeout: 11000 });
  }

  return {
    users,
    fetchUsers,
    retryFetchUsers,
    error,
  };
};
