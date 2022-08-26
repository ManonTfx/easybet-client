import React, { Dispatch, SetStateAction } from 'react';

interface DashboardContextState {
  isSidebar: boolean;
  updateIsSidebar: Dispatch<SetStateAction<boolean>>;
  isModal: boolean;
  updateIsModal: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  updateIsLoading: Dispatch<SetStateAction<boolean>>;
  isMenuBurger: boolean;
  updateIsMenuBurger: Dispatch<SetStateAction<boolean>>;
  idBetActif: string;
  updateIdBetActif: Dispatch<SetStateAction<string>>;
}

export const DashboardContext = React.createContext(
  {} as DashboardContextState
);
