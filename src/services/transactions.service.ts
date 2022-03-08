import { injectable } from 'inversify';
import {
  ITransaction,
  Itransactions,
  ITransactionService,
} from '../core/interfaces';
import { db } from '../core/db';

const RANGE_OF_DAYS = 30;

@injectable()
export class TransactionService implements ITransactionService {
  public async purchase(userId: string, quantity: number): Promise<string> {
    const { transactions } =
      db.find((user) => user.id === userId) ?? ({} as Itransactions);

    const newTransaction: ITransaction = {
      date: new Date().toISOString(),
      quantity,
    };

    transactions.push(newTransaction);

    const transactionsByRangeOfDays =
      this.getTransactionsByRangeOfDays(transactions);

    const sum = transactionsByRangeOfDays.reduce(
      (acc, tx) => acc + Number(tx.quantity),
      0,
    );

    const unitsEarned = sum > 100000 ? sum * 0.01 : 0;

    const charge = sum * this.rate(sum);

    return `${userId} purchased ${quantity} with a charge of ${charge} and ${unitsEarned} units earned`;
  }

  getTransactionsByRangeOfDays(transactions: ITransaction[]) {
    return transactions.filter((tx) => {
      const dateTrans = new Date(tx.date).getTime();
      const dateTrans2 = new Date().getTime();
      const diff = dateTrans2 - dateTrans;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      return days < RANGE_OF_DAYS;
    });
  }

  rate(quantity: number): number {
    if (quantity >= 100000) {
      return 0.01;
    } else if (quantity >= 10000 && quantity < 100000) {
      return 0.03;
    } else {
      return 0.05;
    }
  }
}
