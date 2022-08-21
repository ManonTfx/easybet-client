/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateUserBet
// ====================================================

export interface UpdateUserBet_updateUserBet {
  __typename: "IUserBet";
  id: string;
  userId: string;
  betId: string;
  amount: number;
  odd: number;
}

export interface UpdateUserBet {
  updateUserBet: UpdateUserBet_updateUserBet;
}

export interface UpdateUserBetVariables {
  updateUserBetId: string;
  betId: string;
  amount: number;
  odd: number;
}
