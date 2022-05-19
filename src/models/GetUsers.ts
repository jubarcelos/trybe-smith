import connection from './connection';
import { IUser } from '../Interfaces/IUser';

async function getAll(): Promise<IUser[]> {
  const query = 'SELECT * FROM Trybesmith.Users';

  const [users] = await connection.execute(query);

  return users as IUser[];
}

export default getAll;