import React, { Dispatch, SetStateAction } from 'react';
import { Login } from '../API/types/Login';

interface AuthContextState {
  user: Login | null;
  updateUser: Dispatch<SetStateAction<Login | null>>;
  token: string;
  updateToken: Dispatch<SetStateAction<string>>;
  expireDate: string;
  updateExpireDate: Dispatch<SetStateAction<string>>;
  userRole: string;
  updateUserRole: Dispatch<SetStateAction<string>>;
}

export const AuthContext = React.createContext({} as AuthContextState);
