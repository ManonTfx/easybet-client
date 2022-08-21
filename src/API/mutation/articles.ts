import { gql } from '@apollo/client';

export const CREATE_ARTICLE = gql`
  mutation CreateArticle(
    $category: String!
    $title: String!
    $contents: String!
    $img: String!
    $userId: String!
  ) {
    createArticle(
      category: $category
      title: $title
      contents: $contents
      img: $img
      userId: $userId
    ) {
      id
      category
      title
      date
      contents
      img
      userId
    }
  }
`;

export const UPDATE_ARTICLE = gql`
  mutation UpdateArticle(
    $updateArticleId: String!
    $payload: IUpdateArticlePayload!
  ) {
    updateArticle(id: $updateArticleId, payload: $payload) {
      id
      category
      title
      date
      contents
      img
      userId
    }
  }
`;

export const DELETE_ARTICLE = gql`
  mutation DeleteArticle($deleteArticleByIdId: String!) {
    deleteArticleById(id: $deleteArticleByIdId) {
      id
    }
  }
`;
