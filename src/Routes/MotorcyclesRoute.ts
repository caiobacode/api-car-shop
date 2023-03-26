import { Router } from 'express';
import MotorcycleValidate from '../middlewares/MotorcycleValidate';

import MotorcycleController from '../Controllers/MotorcyclesController';

const motorcycleRouter = Router();

motorcycleRouter.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).createMotorcycle(),
);

motorcycleRouter.get(
  '/motorcycles', 
  (req, res, next) => new MotorcycleController(req, res, next).getAll(),
);

motorcycleRouter.get(
  '/motorcycles/:id', 
  (req, res, next) => new MotorcycleValidate().validateMotorcycle(req, res, next),
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);

export default motorcycleRouter;