import {
  Model,
  model,
  Schema,
  models,
} from 'mongoose';

import ICar from '../Interfaces/ICar';

class CarModel {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({ // cria Schema para para nova collection MongoDB
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Cars || model('Cars', this.schema); // verifica se colecao existe, se nao existir cria
  }

  public async create(car: ICar) {
    return this.model.create(car); // cria um elemento para a collecion "Cars"
  }

  public async findAll() {
    return this.model.find();
  }

  public async findById(id: string) {
    return this.model.findById(id);
  }

  public async updateById(_id: string, newCar: ICar) {
    this.model.updateOne({ _id }, { ...newCar });
  }
}

export default CarModel;