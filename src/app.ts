import express from 'express';
import carsRouter from './Routes/CarsRoute';
import motorcycleRouter from './Routes/MotorcyclesRoute';

const app = express();
app.use(express.json());

app.use(carsRouter);
app.use(motorcycleRouter);

export default app;
