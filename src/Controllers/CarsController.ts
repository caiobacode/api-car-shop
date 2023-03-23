import { Request, Response } from 'express';
import IServiceCars from '../Interfaces/IServiceCars';
import CarsService from '../Services/CarsService';

export default class CarsController {
  private _carsService: IServiceCars;

  constructor() {
    this._carsService = new CarsService();
  }

  async createCar(req : Request, res: Response) {
    const carPropeties = req.body;
    const testObj = await this._carsService.createCar(carPropeties);
    res.status(200).json(testObj);
  }

  // async getAll(req : Request, res: Response) {
  //   const testObj = { message: 'Ok' };
  //   res.status(200).json(testObj);
  // }

  // async getById(req : Request, res: Response) {
  //   const { id } = req.params;
  //   const testObj = { message: 'Ok' };
  //   res.status(200).json(testObj);
  // }
}