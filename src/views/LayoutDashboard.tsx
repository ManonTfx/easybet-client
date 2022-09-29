import React, { useContext, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import ModalTrack from '../components/feed/ModalTrack';
import MenuBurgerDashboard from '../components/MenuBurgerDashboard';
import Header from '../components/sidebar/Header';
import Sidebar from '../components/sidebar/Sidebar';
import { DarkModeContext } from '../context/darkModeContext';
import { DashboardContext } from '../context/dashboardContext';
import { GET_ALL_USERBETS } from '../API/query/userBets';

interface IProps {
  children: JSX.Element;
}

function Layout({ children }: IProps): JSX.Element {
  const [isSidebar, setIsSidebar] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuBurger, setIsMenuBurger] = useState(false);
  const [idBetActif, setIdBetActif] = useState('');

  const { isDarkMode } = useContext(DarkModeContext);

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

  const backgroundColorDarkMode = isDarkMode ? 'bg-[#121212]' : 'bg-white';
  const isMobile = useMediaQuery({
    query: '(max-width: 1024px)',
  });

  /// ** GET ALL USERBETS
  const { error: errorUserBets, data: dataUserBets } =
    useQuery(GET_ALL_USERBETS);

  if (errorUserBets) {
    toast('Une erreur est survenue');
  }
  return (
    <DashboardContext.Provider value={dashboardContextValue}>
      <div className={`${backgroundColorDarkMode}  min-h-screen w-screen flex`}>
        <Sidebar />
        <div className="w-full">
          {!isMobile ? <Header /> : <MenuBurgerDashboard />}
          <div>{children}</div>
        </div>
        {isModal && <ModalTrack dataUserBets={dataUserBets} />}
      </div>
    </DashboardContext.Provider>
  );
}

export default Layout;
