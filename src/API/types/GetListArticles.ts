/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetListArticles
// ====================================================

export interface GetListArticles_getAllArticles {
  __typename: "IArticle";
  id: string;
  category: string;
  title: string;
  date: any;
  contents: string;
  img: string;
}

export interface GetListArticles {
  getAllArticles: GetListArticles_getAllArticles[];
}
