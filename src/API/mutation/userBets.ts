import { gql } from '@apollo/client';

export const CREATE_USERBET_MUTATION = gql`
  mutation CreateUserBet(
    $userId: String!
    $betId: String!
    $amount: Float!
    $odd: Float!
  ) {
    createUserBet(userId: $userId, betId: $betId, amount: $amount, odd: $odd) {
      id
      userId
      betId
      amount
      odd
    }
  }
`;

export const UPDATE_USERBET = gql`
  mutation UpdateUserBet(
    $updateUserBetId: ID!
    $betId: String!
    $amount: Float!
    $odd: Float!
  ) {
    updateUserBet(
      id: $updateUserBetId
      betId: $betId
      amount: $amount
      odd: $odd
    ) {
      id
      userId
      betId
      amount
      odd
    }
  }
`;

export const DELETE_USERBET = gql`
  mutation DeleteUserBet($deleteUserBetByIdId: String!) {
    deleteUserBetById(id: $deleteUserBetByIdId) {
      id
    }
  }
`;
