import { gql } from '@apollo/client';

// **  GET LIST BETS
export const GET_ALL_BETS = gql`
  query GetAllBets {
    getAllBets {
      id
      name
      stake
      bookmaker
      odd
      category
      result
      date
      createdAt
      type
    }
  }
`;

// **  GET ONE BET
export const GET_ONE_BET = gql`
  query GetBetByID($getBetByIdId: String!) {
    getBetByID(id: $getBetByIdId) {
      id
      name
      stake
      bookmaker
      odd
      category
      result
      date
      createdAt
      type
    }
  }
`;
