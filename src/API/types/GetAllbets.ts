/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllbets
// ====================================================

export interface GetAllbets_getAllBets_UserBet {
  __typename: "IUserBet";
  id: string;
  userId: string;
  betId: string;
  amount: number;
  odd: number;
}

export interface GetAllbets_getAllBets {
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
  UserBet: GetAllbets_getAllBets_UserBet[];
}

export interface GetAllbets {
  getAllBets: GetAllbets_getAllBets[];
}
