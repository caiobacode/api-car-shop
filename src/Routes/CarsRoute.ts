import { Router } from 'express';

import CarsController from '../Controllers/CarsController';

const carsRouter = Router();

carsRouter.post('/cars', (req, res) => new CarsController().createCar(req, res));

// carsRouter.get('/cars', (req, res) => new CarsController().getAll(req, res));
// carsRouter.get('/cars/:id', (req, res) => new CarsController().getById(req, res));

export default carsRouter;
