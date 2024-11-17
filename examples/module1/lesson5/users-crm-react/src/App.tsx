import { useState } from 'react';
import UsersList from './components/UsersList';
import StatusStats from './components/StatusStats';
import AddUserDialog from './components/AddUserDialog';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Contacts List</h1>
        <button
          data-testid="add-user-button"
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

      <StatusStats />
      <UsersList />

      <AddUserDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </main>
  );
}

export default App;
