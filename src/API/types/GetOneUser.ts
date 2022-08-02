/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOneUser
// ====================================================

export interface GetOneUser_getUserByID {
  __typename: "IUser";
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  createdAt: any;
  updatedAt: any;
  role: string;
}

export interface GetOneUser {
  getUserByID: GetOneUser_getUserByID;
}

export interface GetOneUserVariables {
  getUserByIdId: string;
}
