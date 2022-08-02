import { gql } from '@apollo/client';

// **  GET LIST USERS
export const LOGOUT_MUTATION = gql`
  query getListUsers {
    getAllUsers {
      id
      email
      password
      firstName
      lastName
      createdAt
      updatedAt
      role
    }
  }
`;
