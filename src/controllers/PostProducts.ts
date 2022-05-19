import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import postProducts from '../services/PostProducts';

const postProductController = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const products = await postProducts(req.body);
    return res.status(StatusCodes.CREATED).json(products);
  } catch (error) { 
    next(error);
  }
};

export default postProductController;