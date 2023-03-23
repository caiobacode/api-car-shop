import express from 'express';
import carsRouter from './Routes/CarsRoute';

const app = express();
app.use(express.json());

app.use(carsRouter);

export default app;
