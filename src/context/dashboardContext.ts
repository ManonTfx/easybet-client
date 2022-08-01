import React, { Dispatch, SetStateAction } from 'react';

interface DashboardContextState {
  isSidebar: boolean;
  updateIsSidebar: Dispatch<SetStateAction<boolean>>;
}

export const DashboardContext = React.createContext(
  {} as DashboardContextState
);
