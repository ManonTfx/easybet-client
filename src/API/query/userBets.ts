import { gql } from '@apollo/client';

// **  GET LIST USERBETS
export const GET_ALL_USERBETS = gql`
  query GetAllUserBets {
    getAllUserBets {
      id
      userId
      betId
      amount
      odd
    }
  }
`;

// **  GET ONE USERBET
export const GET_ONE_USERBET = gql`
  query GetUserBetByID($getUserBetByIdId: String!) {
    getUserBetByID(id: $getUserBetByIdId) {
      id
      userId
      betId
      odd
      amount
    }
  }
`;
