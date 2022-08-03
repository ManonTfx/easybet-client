/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOneBet
// ====================================================

export interface GetOneBet_getBetByID_UserBet {
  __typename: "IUserBet";
  id: string;
  betId: string;
  userId: string;
  amount: number;
  odd: number;
}

export interface GetOneBet_getBetByID {
  __typename: "IBet";
  id: string;
  name: string;
  stake: number;
  bookmaker: string;
  odd: number;
  category: string;
  result: boolean | null;
  date: string;
  createdAt: any;
  UserBet: GetOneBet_getBetByID_UserBet[];
}

export interface GetOneBet {
  getBetByID: GetOneBet_getBetByID;
}

export interface GetOneBetVariables {
  getBetByIdId: string;
}
