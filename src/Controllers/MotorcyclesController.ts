import { Request, Response, NextFunction } from 'express';
import MotorcyclesService from '../Services/MotorcyclesService';
import IServiceMotorcycles from '../Interfaces/IServiceMotorcycles';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private _motorcyclesService: IServiceMotorcycles;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this._motorcyclesService = new MotorcyclesService();
  }

  async createMotorcycle() {
    const ActualMotorcycle: IMotorcycle = {
      ...this.req.body,
      status: this.req.body.status || false,
    }; // se o status nao existir, define-se como "false"
    try {
      const newMotorcycle = await this._motorcyclesService.createMotorcycle(ActualMotorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }
}