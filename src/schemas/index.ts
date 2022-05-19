import joi from 'joi';
import { celebrate, Joi, Segments } from 'celebrate';

const input = {
  productPOST: joi.object().keys({
    name: joi.string().min(3).required(),
    amount: joi.string().min(3).required(),
  }),
  orderPOST: joi.object().keys({
    name: joi.string().min(8).required(),
    amount: joi.string().required(),
    orderId: joi.number().required(),
  }),
  userPOST: joi.object().keys({
    username: joi.string().min(3).required(),
    classe: joi.string().min(3).required(),
    level: joi.number().min(1).required(),
    password: joi.string().min(8).required(),
  }),
  // loginPOST: joi.object().keys({
  //   username: joi.string().required(),
  //   password: joi.string().required(),
  // }),
};

const auth = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
});

export default { input, auth };
