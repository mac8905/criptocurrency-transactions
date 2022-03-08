import { Itransactions } from './interfaces';

export const db: Itransactions[] = [
  {
    id: '1',
    name: 'Juan',
    transactions: [
      {
        date: '2022-03-04T00:00:00.000Z',
        quantity: 20000,
      },
      {
        date: '2022-03-03T00:00:00.000Z',
        quantity: 5000,
      },
      {
        date: '2022-03-02T00:00:00.000Z',
        quantity: 5000,
      },
      {
        date: '2022-02-28T00:00:00.000Z',
        quantity: 50000,
      },
      {
        date: '2022-02-22T00:00:00.000Z',
        quantity: 30000,
      },
    ],
  },
  {
    id: '2',
    name: 'Javier',
    transactions: [
      {
        date: '2022-02-01T00:00:00.000Z',
        quantity: 200000,
      },
    ],
  },
  {
    id: '3',
    name: 'Miguel',
    transactions: [],
  },
];
