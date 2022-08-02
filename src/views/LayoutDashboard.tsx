import React, { useContext, useState } from 'react';
import Header from '../components/sidebar/Header';
import Sidebar from '../components/sidebar/Sidebar';
import { DarkModeContext } from '../context/darkModeContext';
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

  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <DashboardContext.Provider value={dashboardContextValue}>
      <div
        className={
          isDarkMode
            ? 'bg-[#121212] min-h-screen w-screen pb-5  flex font-lexend text-white'
            : 'bg-white min-h-screen w-screen pb-5  flex font-lexend text-white'
        }
      >
        <Sidebar />
        <div className="w-full">
          <Header />
          <div>{children}</div>
        </div>
      </div>
    </DashboardContext.Provider>
  );
}

export default Layout;
