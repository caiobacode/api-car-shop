const carReqMock = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carResMock = {
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carsListMock = [
  {
    id: '6348513f34c397abcad040b2',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '6348513f34c397abcad040b2',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    status: true,
    buyValue: 39.000,
    doorsQty: 2,
    seatsQty: 5,
  },
];

const motoReqMock = {
  model: 'hipermoto',
  year: 2004,
  color: 'Red',
  status: true,
  buyValue: 4.990,
  category: 'sla',
  engineCapacity: 5,
};

const motoResMock = {
  id: '6348513f34c397abcad040b2',
  model: 'hipermoto',
  year: 2004,
  color: 'Red',
  status: true,
  buyValue: 4.990,
  category: 'sla',
  engineCapacity: 5,
};

const motorsListMock = [
  {
    id: '6348513f34c397abcad040b2',
    model: 'hipermoto',
    year: 2004,
    color: 'Red',
    status: true,
    buyValue: 4.990,
    category: 'sla',
    engineCapacity: 5,
  },
  {
    id: '63485s3f34s397dbad0s40b2',
    model: 'supermoto',
    year: 2012,
    color: 'Blue',
    status: true,
    buyValue: 9.990,
    category: 'sla',
    engineCapacity: 10,
  },
];

export { 
  carReqMock, 
  carResMock, 
  carsListMock, 
  motoReqMock, 
  motoResMock, 
  motorsListMock, 
};
