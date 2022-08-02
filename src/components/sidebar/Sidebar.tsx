import React, { useContext } from 'react';
import { DashboardContext } from '../../context/dashboardContext';
import LinkButton from './LinkButton';
import logoEasybet from '../../assets/logos/logoEasybet.svg';
import logoEasybetDark from '../../assets/logos/logoEasybetDark.svg';
import faviconEasybet from '../../assets/logos/faviconEasybet.svg';
import faviconEasybetDark from '../../assets/logos/faviconEasybetDark.svg';
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

import { AuthContext } from '../../context/authContext';
import { DarkModeContext } from '../../context/darkModeContext';

function Sidebar(): JSX.Element {
  const { isSidebar } = useContext(DashboardContext);
  const { isDarkMode } = useContext(DarkModeContext);

  const { user } = useContext(AuthContext);

  const witdhSidebar = isSidebar ? 'w-[300px]' : 'w-[80px]';
  const darkModeBackgroundColor = isDarkMode ? 'bg-[#19191C]' : 'bg-[#DDDFF2]';
  const darkModeBorderColor = isDarkMode
    ? 'border-r-darkMode'
    : 'border-r-[#ABB1DF]';
  const darkModeLogo = isDarkMode ? logoEasybet : logoEasybetDark;
  const darkModeFavicon = isDarkMode ? faviconEasybet : faviconEasybetDark;
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

  return (
    <div
      className={`${witdhSidebar} ] anim-sidebar-width z-20 overflow-hidden h-screen ${darkModeBackgroundColor} px-5 pt-5 inset-0 lg:block hidden border-r-4 ${darkModeBorderColor}`}
    >
      {isSidebar ? (
        <div className="w-[200px]">
          <img src={darkModeLogo} alt="easybet" className="h-7" />
        </div>
      ) : (
        <img src={darkModeFavicon} alt="easybet" className="h-7" />
      )}

      <div className="h-full mt-8 flex lg:justify-between">
        <div>
          <div className="w-full">
            {nav.map((item) => {
              return (
                <div key={item.name}>
                  <LinkButton item={item} />
                </div>
              );
            })}
            {user?.login.role === 'SUPERADMIN' && (
              <LinkButton item={navadmin} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
