import { model, Model, models, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import IMotorcycle from '../Interfaces/IMotorcycle';

abstract class AbstractODM<T> {
  protected schema: Schema;
  protected modelName: string;
  protected model: Model<T>;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(vehicle: ICar | IMotorcycle) {
    return this.model.create(vehicle);
  }

  public async findAll() {
    return this.model.find();
  }

  public async findById(id: string) {
    return this.model.findById(id);
  }

  public async updateById(_id: string, vehicle: ICar | IMotorcycle) {
    this.model.updateOne({ _id }, { ...vehicle });
  }
}

export default AbstractODM;