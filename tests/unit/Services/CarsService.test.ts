import Sinon from 'sinon';
import { expect } from 'chai';

import { Model } from 'mongoose';

import CarsService from '../../../src/Services/CarsService';
import { carReqMock, carResMock, carsListMock } from '../../mocks/mocks';

describe('CarsService tests', function () {
  afterEach(function () {
    Sinon.restore();
  });
  it('endpoint POST "/cars"', async function () {
    Sinon.stub(Model, 'create').resolves(carResMock);

    const carsService = new CarsService();
    
    const response = await carsService.createCar({ ...carReqMock });
    
    expect(response).to.be.deep.equal(carResMock);
  });

  it('endpoint GET "/cars"', async function () {
    Sinon.stub(Model, 'find').resolves(carsListMock);
    const carsService = new CarsService();
    
    const response = await carsService.getAll();
    
    expect(response).to.be.deep.equal(carsListMock);
  });

  it('create car domain - returns null', async function () {
    Sinon.stub(Model, 'findById').resolves(false);
    const carsService = new CarsService();
    
    const response = await carsService.getById('IDINVALIDOc397abcad040b2');
    
    expect(response).to.be.deep.equal(null);
  });

  it('endpoint GET "/cars/:id"', async function () {
    Sinon.stub(Model, 'findById').resolves(carResMock);
    const carsService = new CarsService();
    
    const response = await carsService.getById('6348513f34c397abcad040b2');
    
    expect(response).to.be.deep.equal(carResMock);
  });

  it('endpoint PUT "/cars/:id"', async function () {
    const carsService = new CarsService();
    const response = await carsService.updateById('6348513f34c397abcad040b2', { ...carReqMock });
    
    expect(response).to.be.equal(undefined);
  });
});