import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import CarModel from '../Models/CarModel';

class CarValidate {
  public async validateCar(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    
    if (!isValidObjectId(id)) {
      return res.status(422).json({ message: 'Invalid mongo id' });
    }

    const carModel = new CarModel();
    const oneCar = await carModel.findById(id);

    if (!oneCar) {
      return res.status(404).json({ message: 'Car not found' });
    }

    next();
  }
}

export default CarValidate;