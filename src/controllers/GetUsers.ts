import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import getUsers from '../services/GetUsers';

const getUsersController = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const users = await getUsers();
    return res.status(StatusCodes.OK).json(users);
  } catch (error) { 
    next(error);
  }
};

export default getUsersController;