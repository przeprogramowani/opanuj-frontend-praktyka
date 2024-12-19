import { useEffect, useRef, useState } from 'react';

const useFetchData = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);
    const API_URL = '/api/data/users?timeout=10000';


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

        fetchWithTimeout(API_URL, 5000, newAbortController.signal)
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
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
        };
    }, []);

    return { users, error, getUsersRequest }
}

export default useFetchData