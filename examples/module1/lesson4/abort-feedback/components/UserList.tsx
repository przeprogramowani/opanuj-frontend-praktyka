import { User } from '../types/User';

export const UserList = ({ users }: { users: User[] }) => (
  <ul className="space-y-2">
    {users.map((user) => (
      <li
        className="bg-white p-4 rounded-md border border-gray-100"
        key={user.id}
      >
        {user.name}
      </li>
    ))}
  </ul>
);
