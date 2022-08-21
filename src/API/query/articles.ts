import { gql } from '@apollo/client';

// **  GET LIST ARTICLES
export const GET_ALL_ARTICLES = gql`
  query GetListArticles {
    getAllArticles {
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

// **  GET ONE ARTICLE
export const GET_ONE_ARTICLE = gql`
  query GetOneArticle($getArticleByIdId: String!) {
    getArticleByID(id: $getArticleByIdId) {
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
