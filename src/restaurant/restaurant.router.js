import { Router } from 'express';
import {
  createRestaurant,
  deleteRestaurant,
  readRestaurantById,
  readRestaurantByCN,
  updateRestaurant,
} from './restaurant.controller';

const restaurantRouter = Router();

restaurantRouter.post('/', createRestaurant);
restaurantRouter.get('/', readRestaurantByCN);
restaurantRouter.get('/:id', readRestaurantById);
restaurantRouter.patch('/:id', updateRestaurant);
restaurantRouter.delete('/:id', deleteRestaurant);

export default restaurantRouter;
