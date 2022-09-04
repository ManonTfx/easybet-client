import { gql } from '@apollo/client';

// **  GET LIST USERS
export const GET_ALL_USERS = gql`
  query GetListUsers {
    getAllUsers {
      id
      email
      password
      firstName
      lastName
      updatedAt
      avatar
      role
      createdAt
    }
  }
`;

// **  GET ONE USER
export const GET_ONE_USER = gql`
  query GetOneUser($getUserByIdId: String!) {
    getUserByID(id: $getUserByIdId) {
      id
      email
      password
      firstName
      lastName
      createdAt
      updatedAt
      role
      avatar
    }
  }
`;
