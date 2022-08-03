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
