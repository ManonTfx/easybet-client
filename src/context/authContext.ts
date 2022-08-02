import React, { Dispatch, SetStateAction } from 'react';
import { Login } from '../API/types/Login';

interface AuthContextState {
  user: Login | null;
  updateUser: Dispatch<SetStateAction<Login | null>>;
}

export const AuthContext = React.createContext({} as AuthContextState);
