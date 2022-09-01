import { GetAllBets_getAllBets } from '../../API/types/GetAllbets';
import { GetAllUserBets_getAllUserBets } from '../../API/types/GetAllUserBets';

export interface IBetsWithResult extends GetAllBets_getAllBets {
  profit: number;
}

export interface IUserBetsWithResult extends GetAllUserBets_getAllUserBets {
  profit: number;
}
