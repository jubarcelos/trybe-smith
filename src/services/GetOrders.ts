import getAll from '../models/GetOrders';

const GetOrdersService = async () => {
  const gotOrder = await getAll();
  return gotOrder;
};

export default GetOrdersService;