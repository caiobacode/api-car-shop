import IServiceMotorcycles from '../Interfaces/IServiceMotorcycles';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';

export default class MotorcyclesService implements IServiceMotorcycles {
  private createMotorcycleDomain(newMotorcycle: IMotorcycle | null): Motorcycle | null {
    if (newMotorcycle) { // verifica se existe antes
      return new Motorcycle(newMotorcycle);
    }
    return null; // se nao existir retorna null
  }
  
  async createMotorcycle(motorcycle: IMotorcycle): Promise<Motorcycle | null> {
    const motorcycleModel = new MotorcycleModel();
    const newMotorcycle = await motorcycleModel.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  async getAll(): Promise<(Motorcycle | null)[]> {
    const motorcycleModel = new MotorcycleModel();
    const allMotorcycles = await motorcycleModel.findAll();
    return allMotorcycles.map((m) => this.createMotorcycleDomain(m));
  }

  async getById(id: string): Promise<Motorcycle | null> {
    const motorcycleModel = new MotorcycleModel();
    const oneMotorcycle = await motorcycleModel.findById(id);
    return this.createMotorcycleDomain(oneMotorcycle);
  }
}