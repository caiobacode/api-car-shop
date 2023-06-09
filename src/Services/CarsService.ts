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

  async getAll(): Promise<(Car | null)[]> {
    const carModel = new CarModel();
    const allCars = await carModel.findAll();
    return allCars.map((c) => this.createCarDomain(c));
  }

  async getById(id: string): Promise<Car | null> {
    const carModel = new CarModel();
    const oneCar = await carModel.findById(id);
    return this.createCarDomain(oneCar);
  }

  async updateById(id: string, newCar: ICar): Promise<void> {
    const carModel = new CarModel();
    await carModel.updateById(id, newCar);
  }
}