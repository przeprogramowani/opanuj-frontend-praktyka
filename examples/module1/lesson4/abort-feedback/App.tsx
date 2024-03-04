import { getUsers } from './api.ts';
import { useQuery } from '@tanstack/react-query';
import { User } from './types.ts';

const App = () => {

  const {
    data,
    error,
    isLoading,
    refetch,
  } =
    useQuery({
      queryKey: ['users'],
      queryFn: () => getUsers(),
      enabled: true
    });


  return (
    <div>
      <div className='flex flex-row items-center justify-between py-4'>
        <h1 className='text-2xl font-bold'>Users</h1>
        {error && <div className='flex flex-row items-center'>
          <p className='mr-2'>
            {error.message}
          </p>
          <button onClick={refetch} className='text-blue-400 bg-blue-200 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4'>
            Try again
          </button>
        </div>
        }
      </div>
      {isLoading && <p>Loading...</p>}
      <ul className='space-y-2'>
        { data?.users?.map((user: User) => (
          <li
            className='bg-white p-4 rounded-md border border-gray-100'
            key={user.name}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
