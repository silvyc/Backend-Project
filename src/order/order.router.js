import { Router } from 'express';
import {
  createOrder,
  deleteOrder,
  readOrder,
  updateOrder,
} from './order.controller';

const orderRouter = Router();

orderRouter.post('/', createOrder);
orderRouter.get('/', readOrder);
orderRouter.patch('/', updateOrder);
orderRouter.delete('/', deleteOrder);

export default orderRouter;
