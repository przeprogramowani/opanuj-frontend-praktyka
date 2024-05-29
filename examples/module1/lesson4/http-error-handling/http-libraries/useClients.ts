import { getData } from './external-client';
import { getUsers } from './internal-client';

export function useClients() {
  const fetchUsingExternalClient = async () => {
    try {
      await getData('/api/data/users?error=true');
    } catch (error) {
      alert('Request has failed!');
    }
  };

  const fetchUsingInternalClient = async () => {
    try {
      await getUsers();
    } catch (error) {
      alert('Request has failed!');
    }
  };

  return {
    fetchUsingExternalClient,
    fetchUsingInternalClient,
  };
}
