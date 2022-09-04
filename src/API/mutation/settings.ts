import { gql } from '@apollo/client';

// UPDATE USER PROFIL
export const UPDATE_USER_PROFIL = gql`
  mutation Mutation(
    $updateUserId: ID!
    $email: String
    $firstName: String
    $lastName: String
    $avatar: String
    $role: String
  ) {
    updateUser(
      id: $updateUserId
      email: $email
      firstName: $firstName
      lastName: $lastName
      avatar: $avatar
      role: $role
    ) {
      id
      email
      password
      firstName
      lastName
      createdAt
      updatedAt
      avatar
      role
    }
  }
`;

// UPDATE USER PASSWORD
export const UPDATE_USER_PASSWORD = gql`
  mutation UpdateUserPassword(
    $updateUserPasswordId: ID!
    $lastPassword: String!
    $password: String!
  ) {
    updateUserPassword(
      id: $updateUserPasswordId
      lastPassword: $lastPassword
      password: $password
    ) {
      id
      email
      password
    }
  }
`;

// UPDATE USER AVATAR
export const UPDATE_USER_AVATAR = gql`
  mutation UpdateUserAvatar($updateUserAvatarId: ID!, $avatar: String!) {
    updateUserAvatar(id: $updateUserAvatarId, avatar: $avatar) {
      avatar
      id
      password
      email
      lastName
      firstName
      createdAt
      updatedAt
      role
    }
  }
`;

// UPDATE USER ROLE
export const UPDATE_USER_ROLE = gql`
  mutation UpdateUserRole($updateUserRoleId: ID!, $role: String!) {
    updateUserRole(id: $updateUserRoleId, role: $role) {
      id
    }
  }
`;

// DELETE USER
export const DELETE_USER = gql`
  mutation DeleteUserById($deleteUserByIdId: String!) {
    deleteUserById(id: $deleteUserByIdId) {
      id
    }
  }
`;
