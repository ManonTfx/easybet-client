import { gql } from '@apollo/client';

// **  GET LIST BETS
export const GET_ALL_BETS = gql`
  query GetAllbets {
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
      UserBet {
        id
        userId
        betId
        amount
        odd
      }
    }
  }
`;

// **  GET ONE BET
export const GET_ONE_USER = gql`
  query GetOneBet($getBetByIdId: String!) {
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
      UserBet {
        id
        betId
        userId
        amount
        odd
      }
    }
  }
`;
