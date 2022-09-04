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

// DELETE USER
export const DELETE_USER = gql`
  mutation DeleteUserById($deleteUserByIdId: String!) {
    deleteUserById(id: $deleteUserByIdId) {
      id
    }
  }
`;
