import React, { Dispatch, SetStateAction } from 'react';

interface AuthContextState {
  token: string | null;
  updateToken: Dispatch<SetStateAction<string>>;
}

export const AuthContext = React.createContext({} as AuthContextState);
