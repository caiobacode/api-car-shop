import { Router } from 'express';
import CarValidate from '../middlewares/CarValidate';

import CarsController from '../Controllers/CarsController';

const carsRouter = Router();

carsRouter.post(
  '/cars', 
  (req, res, next) => new CarsController(req, res, next).createCar(),
);

carsRouter.get(
  '/cars', 
  (req, res, next) => new CarsController(req, res, next).getAll(),
);

carsRouter.get(
  '/cars/:id', 
  (req, res, next) => new CarValidate().validateCar(req, res, next),
  (req, res, next) => new CarsController(req, res, next).getById(),
);

carsRouter.put(
  '/cars/:id', 
  (req, res, next) => new CarValidate().validateCar(req, res, next),
  (req, res, next) => new CarsController(req, res, next).updateById(),
);

export default carsRouter;
