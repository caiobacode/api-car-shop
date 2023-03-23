import ICar from './ICar';

export default interface IServiceCars {
  createCar(carInfo: ICar): Promise<object>
  getAll?(): Promise<object>
  getById?(): Promise<object>
}