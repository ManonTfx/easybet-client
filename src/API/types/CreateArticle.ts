/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateArticle
// ====================================================

export interface CreateArticle_createArticle {
  __typename: "IArticle";
  id: string;
  category: string;
  title: string;
  date: any;
  contents: string;
  img: string;
}

export interface CreateArticle {
  createArticle: CreateArticle_createArticle;
}

export interface CreateArticleVariables {
  category: string;
  title: string;
  contents: string;
  img: string;
}
