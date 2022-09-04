import { useContext } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { DashboardContext } from '../../context/dashboardContext';
import LinkButton from './LinkButton';
import logoEasybet from '../../assets/logos/logoEasybet.svg';
import logoEasybetDark from '../../assets/logos/logoEasybetDark.svg';
import faviconEasybet from '../../assets/logos/faviconEasybet.svg';
import settings from '../../assets/icons/settings.svg';
import articles from '../../assets/icons/articles.svg';
import stats from '../../assets/icons/stats.svg';
import feed from '../../assets/icons/feed.svg';
import admin from '../../assets/icons/admin.svg';
import adminDark from '../../assets/icons/adminDark.svg';
import feedDark from '../../assets/icons/feedDark.svg';
import statsDark from '../../assets/icons/statsDark.svg';
import articlesDark from '../../assets/icons/articlesDark.svg';
import settingsDark from '../../assets/icons/settingsDark.svg';
import logout from '../../assets/logout.svg';
import logoutBlack from '../../assets/logoutBlack.svg';

import { AuthContext } from '../../context/authContext';
import { DarkModeContext } from '../../context/darkModeContext';
import { Logout } from '../../API/types/Logout';
import { LOGOUT_MUTATION } from '../../API/mutation/logout';

function Sidebar(): JSX.Element {
  const router = useNavigate();

  const { isSidebar } = useContext(DashboardContext);
  const { isDarkMode } = useContext(DarkModeContext);

  const { user } = useContext(AuthContext);

  const witdhSidebar = isSidebar ? 'w-[300px]' : 'w-[70px]';
  const darkModeBackgroundColor = isDarkMode ? 'bg-[#19191C]' : 'bg-[#DDDFF2]';
  const darkModeBorderColor = isDarkMode
    ? 'border-r-darkMode'
    : 'border-r-[#ABB1DF]';
  const darkModeLogo = isDarkMode ? logoEasybet : logoEasybetDark;
  const adminIcon = isDarkMode ? admin : adminDark;
  const feedIcon = isDarkMode ? feed : feedDark;
  const statsIcon = isDarkMode ? stats : statsDark;
  const articlesIcon = isDarkMode ? articles : articlesDark;
  const settingsIcon = isDarkMode ? settings : settingsDark;

  const nav = [
    { icon: feedIcon, name: "Fil d'actualité", link: '/feed' },
    { icon: statsIcon, name: 'Mes stats', link: '/stats' },
    { icon: articlesIcon, name: 'Articles', link: '/articles' },
    { icon: settingsIcon, name: 'Paramètres', link: '/settings' },
  ];
  const navadmin = {
    icon: adminIcon,
    name: 'Gestion des utilisateurs',
    link: '/admin',
  };

  const [logoutMutation] = useMutation<Logout>(LOGOUT_MUTATION, {
    onCompleted: () => {
      localStorage.removeItem('user');
      router('/', { replace: true });
      window.location.reload();
    },
  });

  const logoutImg = isDarkMode ? logout : logoutBlack;
  return (
    <div
      className={`${witdhSidebar} h-screen anim-sidebar-width relative z-20 overflow-hidden ${darkModeBackgroundColor} px-5 pt-5 inset-0 lg:block hidden border-r-4 ${darkModeBorderColor}`}
    >
      {isSidebar ? (
        <div className="w-[200px]">
          <img src={darkModeLogo} alt="easybet" className="h-7" />
        </div>
      ) : (
        <img src={faviconEasybet} alt="easybet" className="h-7" />
      )}

      <div className="h-full mt-8 flex lg:justify-between h-auto">
        <div>
          <div className="w-full">
            {nav.map((item) => {
              return (
                <div key={item.name}>
                  <LinkButton item={item} />
                </div>
              );
            })}
            {user !== null && user.login.role === 'SUPERADMIN' && (
              <LinkButton item={navadmin} />
            )}
          </div>
        </div>
      </div>
      {isSidebar ? (
        <div
          onKeyDown={undefined}
          role="button"
          tabIndex={0}
          onClick={() => {
            logoutMutation();
          }}
          className="bg-primary px-5 py-3 rounded-[5px] mr-4 !text-white absolute bottom-6 w-10/12 flex items-center justify-between"
        >
          <button type="button" className="">
            Deconnexion
          </button>
          <img src={logout} alt="easybet" className="h-5" />
        </div>
      ) : (
        <button
          onClick={() => {
            logoutMutation();
          }}
          type="button"
        >
          <img
            src={logoutImg}
            alt="easybet"
            className="h-6 absolute bottom-6 "
          />
        </button>
      )}
    </div>
  );
}

export default Sidebar;
