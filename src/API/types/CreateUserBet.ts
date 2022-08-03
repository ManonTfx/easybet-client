/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateUserBet
// ====================================================

export interface CreateUserBet_createUserBet {
  __typename: "IUserBet";
  id: string;
  userId: string;
  betId: string;
  amount: number;
  odd: number;
}

export interface CreateUserBet {
  createUserBet: CreateUserBet_createUserBet;
}

export interface CreateUserBetVariables {
  userId: string;
  betId: string;
  amount: number;
  odd: number;
}
