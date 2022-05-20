import connection from './connection';
import { IOrder } from '../Interfaces/IOrder';
import { IProduct } from '../Interfaces/IProduct';

async function getAll(): Promise<IOrder[]> {
  const [orders] = await connection.execute('SELECT * FROM Trybesmith.Orders');
  const [products] = await connection.execute('SELECT * FROM Trybesmith.Products');

  const orderList = orders as IOrder[];
  const productsList = products as IProduct[];

  const result = orderList.map((order) => ({
    ...order,
    productsIds: productsList
      .filter((product) => product.orderId === order.id)
      .map((filtered) => filtered.id),
  }));  
  return result as IOrder[];
}

export default getAll;