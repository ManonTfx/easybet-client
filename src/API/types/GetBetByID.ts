/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBetByID
// ====================================================

export interface GetBetByID_getBetByID {
  __typename: "IBet";
  id: string;
  name: string;
  stake: number;
  bookmaker: string;
  odd: number;
  category: string;
  result: number | null;
  date: string;
  createdAt: any;
}

export interface GetBetByID {
  getBetByID: GetBetByID_getBetByID;
}

export interface GetBetByIDVariables {
  getBetByIdId: string;
}
