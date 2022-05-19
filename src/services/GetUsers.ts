import getAll from '../models/GetProducts';

const GetUsersService = async () => {
  const gotUsers = await getAll();
  return gotUsers;
};

export default GetUsersService;