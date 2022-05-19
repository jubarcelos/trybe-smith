import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import Jwt from 'jsonwebtoken';
import postUsers from '../services/PostUsers';

const jwtConfig = {
  expiresIn: '3d',
};
const secret = process.env.JWT_SECRET || 'senha';

const postUserController = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const users = await postUsers(req.body);
    const token = Jwt.sign({ data: users }, secret, jwtConfig);

    return res.status(StatusCodes.CREATED).json({ token });
  } catch (error) { 
    next(error);
  }
};
export default postUserController;
