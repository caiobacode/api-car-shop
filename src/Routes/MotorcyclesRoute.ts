import { Router } from 'express';

import MotorcycleController from '../Controllers/MotorcyclesController';

const MotorcycleRouter = Router();

MotorcycleRouter.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).createMotorcycle(),
);

export default MotorcycleRouter;