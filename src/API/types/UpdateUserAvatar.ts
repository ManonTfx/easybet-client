/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateUserAvatar
// ====================================================

export interface UpdateUserAvatar_updateUserAvatar {
  __typename: "IUser";
  avatar: string;
  id: string;
  password: string;
  email: string;
  lastName: string;
  firstName: string;
  createdAt: any;
  updatedAt: any;
  role: string;
}

export interface UpdateUserAvatar {
  updateUserAvatar: UpdateUserAvatar_updateUserAvatar;
}

export interface UpdateUserAvatarVariables {
  updateUserAvatarId: string;
  avatar: string;
}
