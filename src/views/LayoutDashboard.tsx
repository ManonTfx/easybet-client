import React, { useContext, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import MenuBurgerDashboard from '../components/MenuBurgerDashboard';
import Header from '../components/sidebar/Header';
import Sidebar from '../components/sidebar/Sidebar';
import { DarkModeContext } from '../context/darkModeContext';
import { DashboardContext } from '../context/dashboardContext';

interface IProps {
  children: JSX.Element;
}

function Layout({ children }: IProps): JSX.Element {
  const [isSidebar, setIsSidebar] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuBurger, setIsMenuBurger] = useState(false);
  const [idBetActif, setIdBetActif] = useState('');

  const dashboardContextValue = {
    isSidebar,
    updateIsSidebar: setIsSidebar,
    isModal,
    updateIsModal: setIsModal,
    isLoading,
    updateIsLoading: setIsLoading,
    isMenuBurger,
    updateIsMenuBurger: setIsMenuBurger,
    idBetActif,
    updateIdBetActif: setIdBetActif,
  };

  const { isDarkMode } = useContext(DarkModeContext);

  const backgroundColorDarkMode = isDarkMode ? 'bg-[#121212]' : 'bg-white';
  const isMobile = useMediaQuery({
    query: '(max-width: 1024px)',
  });
  return (
    <DashboardContext.Provider value={dashboardContextValue}>
      <div className={`${backgroundColorDarkMode}  min-h-screen w-screen flex`}>
        <Sidebar />
        <div className="w-full">
          {!isMobile ? <Header /> : <MenuBurgerDashboard />}
          <div>{children}</div>
        </div>
      </div>
    </DashboardContext.Provider>
  );
}

export default Layout;
