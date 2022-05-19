// import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProduct } from '../Interfaces/IProduct';

async function getAll(): Promise<IProduct[]> {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.Products');

  return products as IProduct[];
}

export default getAll;