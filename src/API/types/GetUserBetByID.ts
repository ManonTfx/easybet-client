/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserBetByID
// ====================================================

export interface GetUserBetByID_getUserBetByID {
  __typename: "IUserBet";
  id: string;
  userId: string;
  betId: string;
  odd: number;
  amount: number;
}

export interface GetUserBetByID {
  getUserBetByID: GetUserBetByID_getUserBetByID;
}

export interface GetUserBetByIDVariables {
  getUserBetByIdId: string;
}
