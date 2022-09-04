/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateUserRole
// ====================================================

export interface UpdateUserRole_updateUserRole {
  __typename: "IUser";
  id: string;
}

export interface UpdateUserRole {
  updateUserRole: UpdateUserRole_updateUserRole;
}

export interface UpdateUserRoleVariables {
  updateUserRoleId: string;
  role: string;
}
