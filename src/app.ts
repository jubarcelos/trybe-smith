import express from 'express';
import getProducts from './controllers/GetProducts';
import getUsers from './controllers/GetUsers';
import postProducts from './controllers/PostProducts';
// import getOrders from './controllers/GetOrders';
// import postOrders from './controllers/PostOrder';
import postUsers from './controllers/PostUsers';
import error from './middlewares/Errors';
import inputValidator from './middlewares/InputValidator';
import Schema from './schemas';
import Jwt from './middlewares/jwt';

const app = express();

app.use(express.json());
app.get('/products', getProducts);
app.post('/products', inputValidator(Schema.input.productPOST), postProducts);
app.get('/users', getUsers);
app.post('/users', inputValidator(Schema.input.userPOST), Jwt, postUsers);
// app.get('/orders', getOrders);
// app.post('/orders', inputValidator(Schema.input.orderPOST), postOrders);

app.use(error);
export default app;
