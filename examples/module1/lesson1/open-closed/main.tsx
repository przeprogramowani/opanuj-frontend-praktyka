import React from 'react';
import ReactDOM from 'react-dom/client';
import { UsersList } from './UsersList';
import { UserPreview, UserFriends, DetailedUser } from './Variants';

const rootElement = document.getElementById('app')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <>
      <div className="grid grid-cols-3 col-span-4 gap-x-4">
        <UsersList
          header="User Preview"
          viewFn={(user) => <UserPreview {...user} />}
        ></UsersList>
        <UsersList
          header="Users with friends"
          viewFn={(user) => <UserFriends {...user} />}
        ></UsersList>
        <UsersList
          header="Detailed list"
          viewFn={(user) => <DetailedUser {...user} />}
        ></UsersList>
      </div>
    </>
  );
}
