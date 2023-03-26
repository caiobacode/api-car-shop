import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import MotorcycleModel from '../Models/MotorcycleModel';

class MotorcycleValidate {
  public async validateMotorcycle(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    
    if (!isValidObjectId(id)) {
      return res.status(422).json({ message: 'Invalid mongo id' });
    }

    const motorcycleModel = new MotorcycleModel();
    const oneMotorcycle = await motorcycleModel.findById(id);

    if (!oneMotorcycle) {
      return res.status(404).json({ message: 'Motorcycle not found' });
    }

    next();
  }
}

export default MotorcycleValidate;