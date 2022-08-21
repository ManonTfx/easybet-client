/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteArticle
// ====================================================

export interface DeleteArticle_deleteArticleById {
  __typename: "IArticle";
  id: string;
}

export interface DeleteArticle {
  deleteArticleById: DeleteArticle_deleteArticleById;
}

export interface DeleteArticleVariables {
  deleteArticleByIdId: string;
}
