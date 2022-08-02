/* eslint-disable camelcase */
import React, { Dispatch, SetStateAction } from 'react';
import { GetOneUser_getUserByID } from '../API/types/GetOneUser';

interface AdminContextState {
  userActiv: GetOneUser_getUserByID | null;
  updateUserActiv: Dispatch<SetStateAction<GetOneUser_getUserByID | null>>;
}

export const AdminContext = React.createContext({} as AdminContextState);
