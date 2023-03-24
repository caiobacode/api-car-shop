import IServiceCars from '../Interfaces/IServiceCars';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

export default class CarsService implements IServiceCars {
  private createCarDomain(newCar: ICar | null): Car | null {
    if (newCar) { // verifica se existe antes
      return new Car(newCar);
    }
    return null; // se nao existir retorna null
  }
  
  async createCar(car: ICar): Promise<Car | null> {
    const carModel = new CarModel();
    const newCar = await carModel.create(car);
    return this.createCarDomain(newCar);
  }
}