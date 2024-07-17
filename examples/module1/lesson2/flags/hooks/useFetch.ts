import { useEffect, useState } from 'react';

export function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(data.error);
      });
  }, [url]);

  return { data, loading, error };
}
