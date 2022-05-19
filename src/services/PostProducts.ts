import { StatusCodes } from 'http-status-codes';
import { getByName, create } from '../models/PostProduct';
import { IProduct } from '../Interfaces/IProduct';

const postProducts = async (product:IProduct) => {
  const { name } = product;
  const existence = await getByName(name);
  if (existence) {
    return { status: StatusCodes.CONFLICT, message: 'Order already registered' };
  }

  const newProduct = await create(product);
  return newProduct;
};
export default postProducts;