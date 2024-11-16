import React, { ReactNode } from 'react';
import { useUsers } from './hooks/useUsers';
import type { User } from './User';

interface UsersListProps {
  header: string;
  viewFn: (user: User) => JSX.Element;
}

export const UsersList = ({ header, viewFn }: UsersListProps) => {
  const { users, removeAllFilters, filterByFriends } = useUsers();

  return (
    <div className="bg-white p-4 rounded-lg">
      <h1 className="text-xl font-bold mb-4">{header}</h1>
      <div className="my-4">
        <p>Filters</p>
        <div className="flex flex-row space-x-2">
          <FilterButton label={'Show all'} action={removeAllFilters} />
          <FilterButton
            label={'Friends > 0'}
            action={filterByFriends.bind(this, true)}
          />
          <FilterButton
            label={'Friends = 0'}
            action={filterByFriends.bind(this, false)}
          />
        </div>
      </div>
      <div className="space-y-2">
        {users.map((user: User) => (
          <div key={user.id}>{viewFn(user)}</div>
        ))}
      </div>
    </div>
  );
};

interface FilterButtonProps {
  label: string;
  action: Function;
}

export const FilterButton = ({ label, action }: FilterButtonProps) => (
  <button
    className="border border-gray-200 px-4 py-2 hover:bg-blue-200/20 rounded-xl"
    onClick={() => action()}
  >
    {label}
  </button>
);
