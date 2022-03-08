export interface ITransactionService {
  purchase(userId: string, quantity: number): Promise<string>;
}

export interface ITransaction {
  date: string;
  quantity: number;
}

export interface Itransactions {
  id: string;
  name: string;
  transactions: ITransaction[];
}
