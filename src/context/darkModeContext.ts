import React, { Dispatch, SetStateAction } from 'react';

interface DarkModeContextState {
  isDarkMode: boolean;
  updateIsDarkMode: Dispatch<SetStateAction<boolean>>;
  colorText: string;
}

export const DarkModeContext = React.createContext({} as DarkModeContextState);
