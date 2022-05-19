import { StatusCodes } from 'http-status-codes';
import { getByName, create } from '../models/PostUsers';
import { IUser } from '../Interfaces/IUser';

const postUsers = async (user:IUser) => {
  const { username } = user;
  const existence = await getByName(username);
  if (existence) {
    return { status: StatusCodes.CONFLICT, message: 'User already registered' };
  }

  const newUser = await create(user);
  return newUser;
};
export default postUsers;