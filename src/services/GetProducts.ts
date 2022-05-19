import getAll from '../models/GetProducts';

const GetProductsService = async () => {
  const gotProduct = await getAll();
  return gotProduct;
};

export default GetProductsService;