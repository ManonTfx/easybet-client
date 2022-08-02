/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getListUsers
// ====================================================

export interface getListUsers_getAllUsers {
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

export interface getListUsers {
  getAllUsers: getListUsers_getAllUsers[];
}
