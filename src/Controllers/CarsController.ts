import { Request, Response, NextFunction } from 'express';
import IServiceCars from '../Interfaces/IServiceCars';
import CarsService from '../Services/CarsService';
import ICar from '../Interfaces/ICar';

export default class CarsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private _carsService: IServiceCars;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this._carsService = new CarsService();
  }

  async createCar() {
    const ActualCar: ICar = {
      ...this.req.body,
      status: this.req.body.status || false,
    }; // se o status nao existir, define-se como "false"
    try {
      const newCar = await this._carsService.createCar(ActualCar);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const allCars = await this._carsService.getAll();
      return this.res.status(200).json(allCars);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    const { id } = this.req.params;
    try {
      const oneCar = await this._carsService.getById(id);
      return this.res.status(200).json(oneCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateById() {
    const { id } = this.req.params;
    const newCar: ICar = {
      ...this.req.body,
      status: this.req.body.status || false,
    };
    try {
      await this._carsService.updateById(id, newCar);
      return this.res.status(200).json({ id, ...newCar });
    } catch (error) {
      this.next(error);
    }
  }
}