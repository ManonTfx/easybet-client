import { GetAllUserBets_getAllUserBets } from '../../API/types/GetAllUserBets';
import { GetAllBets_getAllBets } from '../bets';

export interface IBetsWithResult extends GetAllBets_getAllBets {
  profit: number;
}

export interface IUserBetsWithResult extends GetAllUserBets_getAllUserBets {
  profit: number;
}
