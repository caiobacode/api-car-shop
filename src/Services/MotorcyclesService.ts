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
}