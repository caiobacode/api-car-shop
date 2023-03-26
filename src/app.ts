import express from 'express';
import carsRouter from './Routes/CarsRoute';
import MotorcycleRouter from './Routes/MotorcyclesRoute';

const app = express();
app.use(express.json());

app.use(carsRouter);
app.use(MotorcycleRouter);

export default app;
