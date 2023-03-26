import IMotorcycle from './IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';

export default interface IServiceMotorcycles {
  createMotorcycle(motorcycle: IMotorcycle): Promise<Motorcycle | null>
}