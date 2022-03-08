import { Container } from 'inversify';
import { TransactionService } from '../services/transactions.service';
import '../controllers/transactions.controller';
import { TYPES } from './types';

export const container = new Container();

container
  .bind<TransactionService>(TYPES.ITransactionService)
  .to(TransactionService);
