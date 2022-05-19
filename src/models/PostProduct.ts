import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProduct } from '../Interfaces/IProduct';

export const getById = async (id: number): Promise<IProduct> => {
  const [result] = await connection
    .execute('SELECT * FROM Trybesmith.Products WHERE id = ?', [id]);
  const [product] = result as IProduct[];
  return product;
};

export const getByName = async (name: string): Promise<IProduct> => {
  const [result] = await connection
    .execute('SELECT * FROM Trybesmith.Products WHERE name = ?', [name]);
  const [product] = result as IProduct[];
  return product;
};

export const create = async (product: IProduct): Promise<IProduct> => {
  const { name, amount } = product;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );  
  return { id: result.insertId, name, amount };
};