/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Mutation
// ====================================================

export interface Mutation_updateUser {
  __typename: "IUser";
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  createdAt: any;
  updatedAt: any;
  avatar: string;
  role: string;
}

export interface Mutation {
  updateUser: Mutation_updateUser;
}

export interface MutationVariables {
  updateUserId: string;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  avatar?: string | null;
  role?: string | null;
}
