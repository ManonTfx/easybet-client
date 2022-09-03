import React, { Dispatch, SetStateAction } from 'react';
import { Login } from '../API/types/Login';

interface AuthContextState {
  user: Login;
  updateUser: Dispatch<SetStateAction<Login>>;
  expireDate: string;
  updateExpireDate: Dispatch<SetStateAction<string>>;
  isLoginModal: boolean;
  updateIsLoginModal: Dispatch<SetStateAction<boolean>>;
  isSignUpModal: boolean;
  updateIsSignUpModal: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = React.createContext({} as AuthContextState);
