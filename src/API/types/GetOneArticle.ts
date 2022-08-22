/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOneArticle
// ====================================================

export interface GetOneArticle_getArticleByID {
  __typename: "IArticle";
  id: string;
  category: string;
  title: string;
  date: any;
  contents: string;
  img: string;
  userId: string;
}

export interface GetOneArticle {
  getArticleByID: GetOneArticle_getArticleByID;
}

export interface GetOneArticleVariables {
  getArticleByIdId: string;
}
