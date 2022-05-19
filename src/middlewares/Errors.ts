import Joi from 'joi';
import { NextFunction, Response, Request, ErrorRequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

const handlerError = (err:ErrorRequestHandler, req:Request, res:Response, _next:NextFunction) => {
  if (Joi.isError(err)) {
    if (err.details[0].type === 'any.required') {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: err.details[0].message });
    }
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: err.details[0].message });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'server error' });
};

export default handlerError;