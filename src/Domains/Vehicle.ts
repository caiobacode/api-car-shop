import ICar from '../Interfaces/ICar';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;

  constructor(vehicle: ICar | IMotorcycle) {
    this.id = vehicle.id;
    this.model = vehicle.model;
    this.year = vehicle.year;
    this.color = vehicle.color;
    this.status = vehicle.status;
    this.buyValue = vehicle.buyValue;
  }

  public getId(): string | undefined {  
    return this.id;
  }
  
  public getModel(): string {
    return this.model;
  }

  public getYear(): number {
    return this.year;
  }

  public getColor(): string {
    return this.color;
  }

  public getStatus(): boolean | undefined {
    return this.status;
  }

  public getBuyValue(): number {
    return this.buyValue;
  }
}