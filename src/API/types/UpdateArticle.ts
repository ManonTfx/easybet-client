/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { IUpdateArticlePayload } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateArticle
// ====================================================

export interface UpdateArticle_updateArticle {
  __typename: "IArticle";
  id: string;
  category: string;
  title: string;
  date: any;
  contents: string;
  img: string;
}

export interface UpdateArticle {
  updateArticle: UpdateArticle_updateArticle;
}

export interface UpdateArticleVariables {
  updateArticleId: string;
  payload: IUpdateArticlePayload;
}
