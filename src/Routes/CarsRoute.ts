import { Router } from 'express';

import CarsController from '../Controllers/CarsController';

const carsRouter = Router();

carsRouter.post('/cars', (req, res, next) => new CarsController(req, res, next).createCar());

// carsRouter.get('/cars', (req, res) => new CarsController(req, res, next).getAll()));
// carsRouter.get('/cars/:id', (req, res) => new CarsController(req, res, next).getById());

export default carsRouter;
