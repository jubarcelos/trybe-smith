// import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProduct } from '../Interfaces/IProduct';

async function getAll(): Promise<IProduct[]> {
  const query = 'SELECT * FROM Trybesmith.Products';

  const [products] = await connection.execute(query);

  return products as IProduct[];
}

export default getAll;