import React, { useState } from 'react';
import Header from '../components/sidebar/Header';
import Sidebar from '../components/sidebar/Sidebar';
import { DashboardContext } from '../context/dashboardContext';

interface IProps {
  children: JSX.Element;
}

function Layout({ children }: IProps): JSX.Element {
  const [isSidebar, setIsSidebar] = useState(true);

  const dashboardContextValue = {
    isSidebar,
    updateIsSidebar: setIsSidebar,
  };

  return (
    <DashboardContext.Provider value={dashboardContextValue}>
      <div className="min-h-screen w-screen pb-5 flex font-lexend text-white">
        <Sidebar />
        <div className="w-full">
          <Header />
          <div className="lg:w-10/12 mr-1">{children}</div>
        </div>
      </div>
    </DashboardContext.Provider>
  );
}

export default Layout;
