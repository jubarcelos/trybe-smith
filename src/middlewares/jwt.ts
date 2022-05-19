import Jwt, { Secret } from 'jsonwebtoken';
import { NextFunction, Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';

const secret = process.env.JWT_SECRET as Secret;

const authenticate = (req:Request, res:Response, next:NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
  }
  try {
    const decode = Jwt.verify(authHeader, secret);
    req.user = decode;
    next();
  } catch (error:unknown) {
    if (error.name.includes('JsonWebTokenError')) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Expired or invalid token' });
    }
    next(error);
  }
};

export default authenticate;