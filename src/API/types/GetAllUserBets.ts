/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllUserBets
// ====================================================

export interface GetAllUserBets_getAllUserBets {
  __typename: "IUserBet";
  id: string;
  userId: string;
  betId: string;
  amount: number;
  odd: number;
}

export interface GetAllUserBets {
  getAllUserBets: GetAllUserBets_getAllUserBets[];
}
