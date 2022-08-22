import React, { Dispatch, SetStateAction } from 'react';

interface DashboardContextState {
  isSidebar: boolean;
  updateIsSidebar: Dispatch<SetStateAction<boolean>>;
  isModal: boolean;
  updateIsModal: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  updateIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const DashboardContext = React.createContext(
  {} as DashboardContextState
);
