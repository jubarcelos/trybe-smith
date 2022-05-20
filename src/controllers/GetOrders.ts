import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import getOrders from '../services/GetOrders';

const getOrdersController = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const orders = await getOrders();
    return res.status(StatusCodes.OK).json(orders);
  } catch (error) { 
    next(error);
  }
};

export default getOrdersController;