import { NewUser } from '../types/NewUser';
import { User } from '../types/User';
import { creatNewUser } from '../utils/creatNewUser';
import { users } from '../utils/fetchUser'

export const getAllUsers = () => {
  return users.get<User[]>();
}

export const addUser = (userId: number, data: NewUser) => {
  return users.post<User>('', creatNewUser(userId, data));
};

export const deleteUser = (userId: number) => {
  users.delete(`/${userId}`);
};

export const patchUser = (userId: number, patch: object) => {
  return users.patch(`/${userId}`, patch)
}
