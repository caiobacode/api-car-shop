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

  public async getAll() {
    try {
      const allMotorcycles = await this._motorcyclesService.getAll();
      return this.res.status(200).json(allMotorcycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    const { id } = this.req.params;
    try {
      const oneMotorcycle = await this._motorcyclesService.getById(id);
      return this.res.status(200).json(oneMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateById() {
    const { id } = this.req.params;
    const newMotorcycle: IMotorcycle = {
      ...this.req.body,
      status: this.req.body.status || false,
    };
    try {
      await this._motorcyclesService.updateById(id, newMotorcycle);
      return this.res.status(200).json({ id, ...newMotorcycle });
    } catch (error) {
      this.next(error);
    }
  }
}