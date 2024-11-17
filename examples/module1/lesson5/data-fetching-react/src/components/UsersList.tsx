import type { User } from '../model/User';
import { getStatusColor } from '../utils/statusColors';

interface UsersListProps {
  users: User[];
}

const UsersList = ({ users }: UsersListProps) => {
  return (
    <div className="grid gap-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white rounded-lg shadow p-4 flex justify-between items-center"
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <span
              className={`px-2 py-1 rounded-lg text-sm font-medium ${getStatusColor(
                user.status
              )}`}
            >
              {user.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
