import { useState, useEffect } from 'react';
import type { User } from './model/User';
import UsersList from './components/UsersList.tsx';
import StatusStats from './components/StatusStats.tsx';
import AddUserDialog from './components/AddUserDialog.tsx';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/data/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Contacts List</h1>
        <button
          onClick={() => setIsDialogOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add Contact
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="text-gray-600">Loading contacts...</div>
        </div>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      ) : (
        <>
          <StatusStats users={users} />
          <UsersList users={users} />
        </>
      )}

      <AddUserDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onUserAdded={fetchUsers}
      />
    </main>
  );
}

export default App;
