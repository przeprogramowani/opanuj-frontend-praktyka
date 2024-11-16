import type { User } from './User';

export const UserPreview = ({ firstName, lastName }: User) => (
  <div className="flex bg-cyan-800 text-white rounded-lg p-4">
    {firstName} {lastName}
  </div>
);

export const UserFriends = (user: User) => (
  <div className="flex bg-purple-800 text-white rounded-lg p-4">
    <div>
      <h4 className="text-lg font-bold">
        {user.firstName} {user.lastName}
      </h4>
      <p className="mt-1">{user.profileDescription}</p>
      {user.friends.length > 0 && (
        <p className="border-t border-gray-200 mt-4 py-4">Friends:</p>
      )}
      {user.friends.map((friend) => (
        <p>
          {friend.firstName} {friend.lastName}
        </p>
      ))}
    </div>
  </div>
);

export const DetailedUser = (user: User) => (
  <div className="flex bg-orange-800 text-white rounded-lg p-4">
    <div className="mr-4 flex-shrink-0">
      <img
        src={user.profilePictureUrl}
        className="w-8 h-8 rounded-full shadow-md"
      />
    </div>
    <div>
      <h4 className="text-lg font-bold">
        {user.firstName} {user.lastName}
      </h4>
      <p className="mt-1">{user.profileDescription}</p>
      {user.friends.length > 0 && (
        <p className="border-t border-gray-200 mt-4 py-4">🙌 Friends:</p>
      )}
      {user.friends.map((friend) => (
        <p>
          {friend.firstName} {friend.lastName}
        </p>
      ))}
      {user.follows.length > 0 && (
        <p className="border-t border-gray-200 mt-4 py-4">👁️ Follows:</p>
      )}
      {user.follows.map((followed) => (
        <p>
          {followed.firstName} {followed.lastName}
        </p>
      ))}
    </div>
  </div>
);
