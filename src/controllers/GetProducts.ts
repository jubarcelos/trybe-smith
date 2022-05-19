import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import getProducts from '../services/GetProducts';

const getProductController = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const products = await getProducts();
    return res.status(StatusCodes.OK).json(products);
  } catch (error) { 
    next(error);
  }
};

export default getProductController;