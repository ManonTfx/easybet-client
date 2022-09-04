/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetListUsers
// ====================================================

export interface GetListUsers_getAllUsers {
  __typename: "IUser";
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  updatedAt: any;
  avatar: string;
  role: string;
  createdAt: any;
}

export interface GetListUsers {
  getAllUsers: GetListUsers_getAllUsers[];
}
