import { Router } from 'express';
import {
  createOrder,
  deleteOrder,
  readOrder,
  readOrderId,
  readOrderRestaurant,
  updateOrder,
} from './order.controller';

const orderRouter = Router();

orderRouter.post('/', createOrder);
orderRouter.get('/:id', readOrderId);
//orderRouter.get('/', readOrderRestaurant);
orderRouter.patch('/', updateOrder);
orderRouter.delete('/', deleteOrder);

export default orderRouter;
