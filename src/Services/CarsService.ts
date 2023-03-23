import IServiceCars from '../Interfaces/IServiceCars';
import ICarPropeties from '../Interfaces/ICar';

export default class CarsService implements IServiceCars {
  async createCar(carPropeties: ICarPropeties): Promise<object> {
    return carPropeties;
  }
}