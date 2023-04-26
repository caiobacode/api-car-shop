import Sinon from 'sinon';
import { expect } from 'chai';

import { Model } from 'mongoose';

import MotorcyclesService from '../../../src/Services/MotorcyclesService';
import { motoReqMock, motoResMock, motorsListMock } from '../../mocks/mocks';

describe('motorcycleService tests', function () {
  afterEach(function () {
    Sinon.restore();
  });

  it('endpoint POST "/motorcycles"', async function () {
    Sinon.stub(Model, 'create').resolves(motoResMock);

    const motorcycleService = new MotorcyclesService();
    
    const response = await motorcycleService.createMotorcycle({ ...motoReqMock });
    
    expect(response).to.be.deep.equal(motoResMock);
  });

  it('endpoint GET "/motorcycles/:id"', async function () {
    Sinon.stub(Model, 'findById').resolves(motoResMock);
    const motorcycleService = new MotorcyclesService();
    
    const response = await motorcycleService.getById('6348513f34c397abcad040b2');
    
    expect(response).to.be.deep.equal(motoResMock);
  });

  it('endpoint GET "/motorcycles"', async function () {
    Sinon.stub(Model, 'find').resolves(motorsListMock);
    const motorcycleService = new MotorcyclesService();
    
    const response = await motorcycleService.getAll();
    
    expect(response).to.be.deep.equal(motorsListMock);
  });

  it('endpoint PUT "/motorcycles/:id"', async function () {
    const motorcycleService = new MotorcyclesService();
    const response = await motorcycleService.updateById('randomid', { ...motoReqMock });
    
    expect(response).to.be.equal(undefined);
  });

  it('create null motorcycle domain test', async function () {
    Sinon.stub(Model, 'findById').resolves(false);
    const motorcycleService = new MotorcyclesService();
    
    const response = await motorcycleService.getById('IDINVALIDOc397abcad040b2');
    
    expect(response).to.be.deep.equal(null);
  });
});