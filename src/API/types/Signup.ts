/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Signup
// ====================================================

export interface Signup_signup {
  __typename: "IUserWithToken";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  token: string;
}

export interface Signup {
  signup: Signup_signup;
}

export interface SignupVariables {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
