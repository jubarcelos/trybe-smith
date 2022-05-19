import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser } from '../Interfaces/IUser';

export const getById = async (id: number): Promise<IUser> => {
  const [result] = await connection
    .execute('SELECT * FROM Trybesmith.Users WHERE id = ?', [id]);
  const [user] = result as IUser[];
  return user;
};

export const getByName = async (username: string): Promise<IUser> => {
  const [result] = await connection
    .execute('SELECT * FROM Trybesmith.Users WHERE username = ?', [username]);
  const [user] = result as IUser[];
  return user;
};

export const create = async (user: IUser): Promise<IUser> => {
  const { username, classe, level, password } = user;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );  
  return { id: result.insertId, username, classe, level, password };
};