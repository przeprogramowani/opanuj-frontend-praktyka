import { useState } from 'react';
import { usePostUser } from '../hooks/usePostUser';

interface AddUserDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddUserDialog = ({ isOpen, onClose }: AddUserDialogProps) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('New');
  const [error, setError] = useState<string | null>(null);

  const closeDialog = () => {
    setName('');
    setStatus('New');
    setError(null);
    onClose();
  };

  const { mutate, isPending, isError, error: fetchError } = usePostUser(closeDialog);

  const statuses = [
    'New',
    'Contacted',
    'In Progress',
    'Qualified',
    'Converted',
    'Rejected',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError('Name is required');
      return;
    }

    setError(null);
    mutate({ name: name, status: status });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
      data-testid="add-user-dialog"
    >
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add New Contact</h2>
          <button
            onClick={closeDialog}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {isError || error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
            {isError ? fetchError?.message : error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          data-testid="add-user-form"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter name"
            />
          </div>

          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {statuses.map((statusOption) => (
                <option key={statusOption} value={statusOption}>
                  {statusOption}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={closeDialog}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {isPending ? 'Adding...' : 'Add Contact'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserDialog;
