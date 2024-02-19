export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  profileDescription: string;
  profilePictureUrl: string;
  follows: User[];
  friends: User[];
}
