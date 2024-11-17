import { useEffect, useState } from 'react';
import type { User } from '../User';

const USER_JOHN: User = {
  id: 0,
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  profileDescription: 'Lorem ipsum dolor sit amet',
  profilePictureUrl: 'https://randomuser.me/api/portraits/men/12.jpg',
  follows: [],
  friends: [],
};

const USER_ANTHONY: User = {
  id: 1,
  firstName: 'Anthony',
  lastName: 'DeMuro',
  age: 32,
  profileDescription: 'Lorem ipsum dolor sit amet',
  profilePictureUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
  follows: [],
  friends: [USER_JOHN],
};

const USER_CARLA: User = {
  id: 2,
  firstName: 'Carla',
  lastName: 'Marks',
  age: 22,
  profileDescription: 'Lorem ipsum dolor sit amet',
  profilePictureUrl: 'https://randomuser.me/api/portraits/women/29.jpg',
  follows: [USER_JOHN, USER_ANTHONY],
  friends: [USER_JOHN, USER_ANTHONY],
};

const USERS_LIST: User[] = [USER_JOHN, USER_ANTHONY, USER_CARLA];

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setUsers(USERS_LIST);
    });
  }, []);

  function removeAllFilters() {
    setUsers(USERS_LIST);
  }

  function filterByFriends(hasFriends: boolean) {
    setUsers(
      USERS_LIST.filter((user) =>
        hasFriends ? user.friends.length > 0 : user.friends.length === 0
      )
    );
  }

  return { users, removeAllFilters, filterByFriends };
}
