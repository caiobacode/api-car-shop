import ICar from './ICar';
import Car from '../Domains/Car';

export default interface IServiceCars {
  createCar(car: ICar): Promise<Car | null>
  getAll(): Promise<(Car | null)[]>
  getById?(): Promise<object>
}