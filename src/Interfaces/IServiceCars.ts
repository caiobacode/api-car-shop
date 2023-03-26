import ICar from './ICar';
import Car from '../Domains/Car';

export default interface IServiceCars {
  createCar(car: ICar): Promise<Car | null>
  getAll(): Promise<(Car | null)[]>
  getById(id: string): Promise<Car | null>
  updateById(id: string, newCar: ICar): void
}