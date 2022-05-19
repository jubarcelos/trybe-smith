import express from 'express';
import getProducts from './Controller/GetProducts';
import getOrders from './Controller/GetOrders';
import error from '../middleware/Errors';

const app = express();

app.use(express.json());

app.get('/products', getProducts);
app.get('/orders', getOrders);
app.use(error);
export default app;
